<template>
  <i
    role="none"
    :class="`icon-${icon}`"
    class="inline-flex leading-none" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

// Icon classes are safelisted in tailwind config.
export default defineComponent({
  name: 'Icon',
  props: {
    icon: {
      type: String,
      default: null,
    },
  },
});
</script>
