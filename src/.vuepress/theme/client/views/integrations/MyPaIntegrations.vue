<template>
  <content />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { usePageFrontmatter } from '@vuepress/client';

export default defineComponent({
  name: 'MyPaIntegrations',

  setup: (props, ctx) => {
    const frontmatter = usePageFrontmatter();

    return {
      frontmatter,
    };
  },
});
</script>
