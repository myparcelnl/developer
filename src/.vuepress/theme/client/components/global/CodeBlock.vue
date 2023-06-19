<template>
  <div :class="`language-${language}`">
    <pre :class="`language-${language}`"><code v-text="code"/></pre>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

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
