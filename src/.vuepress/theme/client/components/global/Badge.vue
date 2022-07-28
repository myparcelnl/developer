<template>
  <span class="bg-goldfish-900 px-2 py-0.5 rounded-full">
    <slot />
  </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Badge',
});
</script>
