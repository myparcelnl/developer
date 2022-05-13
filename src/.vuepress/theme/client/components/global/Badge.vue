<template>
  <span>
    <slot />
  </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Badge',
});
</script>
