<template>
  <div
    v-if="hasSidebar"
    class="cursor-pointer flex lg:hidden p-3"
    :title="themeLocale.toggleSidebar"
    aria-expanded="false"
    role="button"
    tabindex="0"
    @click="toggle">
    <div
      class="flex flex-col h-5 items-center justify-around w-5"
      aria-hidden="true">
      <span class="bg-black dark:bg-white h-0.5 inline-block rounded-lg w-full" />
      <span class="bg-black dark:bg-white h-0.5 inline-block rounded-lg w-full" />
      <span class="bg-black dark:bg-white h-0.5 inline-block rounded-lg w-full" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useSidebar } from '@mptheme/client/services/composables/useSidebar';
import { useThemeLocaleData } from '@mptheme/client/services/composables/useThemeLocaleData';

export default defineComponent({
  name: 'ToggleSidebarButton',
  emits: ['toggle'],
  setup: (props, ctx) => {
    const sidebar = useSidebar();
    const themeLocale = useThemeLocaleData();

    return {
      themeLocale,
      toggled: sidebar.isOpen,
      hasSidebar: sidebar.exists,
      toggle() {
        sidebar.toggle();
        ctx.emit('toggle');
      },
    };
  },
});
</script>
