<template>
  <div v-html="renderedMarkdown" />
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import MarkdownIt from 'markdown-it';

export default defineComponent({
  name: 'Markdown',

  props: {
    content: {
      type: String,
      required: true,
    },
  },

  setup(props) {
    const md = new MarkdownIt({ html: true });

    const renderedMarkdown = computed<string>(() => {
      return md.render(props.content);
    });

    return {
      renderedMarkdown,
    };
  },
});
</script>
