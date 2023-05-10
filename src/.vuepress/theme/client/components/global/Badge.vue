<template>
  <span class="bg-goldfish-200 dark:bg-goldfish-800 px-2 py-0.5 rounded-full text-xs">
    <slot />
  </span>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'Badge',
});
</script>
