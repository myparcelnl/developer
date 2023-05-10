<template>
  <div class="gap-4 grid pb-4 pt-2">
    <slot />
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'Stack',
});
</script>
