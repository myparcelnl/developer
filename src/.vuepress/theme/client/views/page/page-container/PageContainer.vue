<template>
  <div
    class="min-h-full"
    :class="{
      'lg:pl-80': isOpen,
    }">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useSidebar } from '@mptheme/client/composables';

export default defineComponent({
  name: 'PageContainer',
  setup: () => {
    const { isOpen } = useSidebar();

    return { isOpen };
  },
});
</script>
