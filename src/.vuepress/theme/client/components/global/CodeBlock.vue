<template>
  <pre :class="`language-${language}`">
    <code>
      {{ code }}
    </code>
  </pre>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CodeBlock',
  props: {
    language: {
      type: String,
      default: 'text',
    },

    code: {
      type: String,
      required: true,
    },
  },
});
</script>
