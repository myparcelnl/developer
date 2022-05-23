<template>
  <PageContainer class="flex flex-col justify-between">
    <slot name="top" />

    <ContentContainer
      tag="main"
      type="sm"
      class="page pb-12 pt-8">
      <slot name="content">
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
import { MyPaPageData, MyPaPageFrontmatter } from '@mptheme/config.types';
import { usePageData, usePageFrontmatter } from '@vuepress/client';
import ContentContainer from '@mptheme/client/views/layout/content-container/ContentContainer.vue';
import PageContainer from '@mptheme/client/views/page/page-container/PageContainer.vue';
import PageFooter from '@mptheme/client/views/page/page-footer/PageFooter.vue';
import RedirectContent from '@mptheme/client/components/redirect-content/RedirectContent.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Page',
  components: {
    RedirectContent,
    ContentContainer,
    PageContainer,
    PageFooter,
  },

  setup: () => ({
    pageData: usePageData<MyPaPageData>(),
    frontmatter: usePageFrontmatter<MyPaPageFrontmatter>(),
  }),
});
</script>
