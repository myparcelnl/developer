<template>
  <PageContainer class="flex flex-col justify-between">
    <slot name="top" />

    <RouteBreadcrumbs />

    <ContentContainer
      tag="main"
      type="sm"
      class="page pb-12 pt-4">
      <slot name="content">
        <h1
          v-if="sidebar.items[0]?.text"
          v-text="sidebar.items[0]?.text" />

        <h2
          v-if="frontmatter.title"
          v-text="frontmatter.title" />

        <RedirectContent v-if="!pageData.hasContent && (frontmatter.languages || frontmatter.redirect)" />

        <Content />
      </slot>
    </ContentContainer>

    <slot name="bottom" />

    <PageFooter />
  </PageContainer>
</template>

<script lang="ts">
import {MyPaPageData, MyPaPageFrontmatter} from '@mptheme/config.types';
import {usePageData, usePageFrontmatter} from '@vuepress/client';
import ContentContainer from '@mptheme/client/views/layout/content-container/ContentContainer.vue';
import PageContainer from '@mptheme/client/views/page/page-container/PageContainer.vue';
import PageFooter from '@mptheme/client/views/page/page-footer/PageFooter.vue';
import RedirectContent from '@mptheme/client/components/redirect-content/RedirectContent.vue';
import RouteBreadcrumbs from '@mptheme/client/views/page/RouteBreadcrumbs.vue';
import {defineComponent} from 'vue';
import {useSidebar} from '@mptheme/client/composables';

export default defineComponent({
  name: 'Page',
  components: {
    RouteBreadcrumbs,
    RedirectContent,
    ContentContainer,
    PageContainer,
    PageFooter,
  },

  setup: () => {
    return {
      sidebar: useSidebar(),
      pageData: usePageData<MyPaPageData>(),
      frontmatter: usePageFrontmatter<MyPaPageFrontmatter>(),
    };
  },
});
</script>
