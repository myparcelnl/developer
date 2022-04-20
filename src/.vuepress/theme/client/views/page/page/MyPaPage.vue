<template>
  <PageContainer class="-mt-16 flex flex-col justify-between">
    <slot name="top" />

    <ContentContainer
      tag="main"
      type="sm"
      class="page pb-12 pt-24">
      <h1
        v-if="frontmatter.title"
        v-text="frontmatter.title" />

      <component
        :is="frontmatter.content"
        v-if="frontmatter.content" />

      <Content v-else />
    </ContentContainer>

    <slot name="bottom" />

    <PageFooter />
  </PageContainer>
</template>

<script lang="ts">
import ContentContainer from '@mptheme/client/views/layout/content-container/ContentContainer.vue';
import IndexContent from '@mptheme/client/components/index-content/IndexContent.vue';
import PageContainer from '@mptheme/client/views/page/page-container/PageContainer.vue';
import PageFooter from '@mptheme/client/views/page/page-footer/PageFooter.vue';
import { defineComponent } from 'vue';
import { usePageFrontmatter } from '@vuepress/client';

export default defineComponent({
  name: 'MyPaPage',
  components: {
    IndexContent,
    ContentContainer,
    PageContainer,
    PageFooter,
  },

  setup: () => {
    const frontmatter = usePageFrontmatter();

    return { frontmatter };
  },
});
</script>
