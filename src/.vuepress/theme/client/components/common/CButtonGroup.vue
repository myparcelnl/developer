<template>
  <div class="gap-2 grid-flow-col inline-grid">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CButtonGroup',
});
</script>
