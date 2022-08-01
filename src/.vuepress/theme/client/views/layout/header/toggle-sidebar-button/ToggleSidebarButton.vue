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
      class="flex flex-col h-6 items-center justify-around w-6"
      aria-hidden="true"
      tabindex="-1">
      <span
        :class="[
          burgerClasses,
          {
            '-rotate-45 translate-y-2': toggled,
          },
        ]" />
      <span
        :class="[
          burgerClasses,
          {
            'scale-x-0': toggled,
          },
        ]" />
      <span
        :class="[
          burgerClasses,
          {
            'rotate-45 -translate-y-2': toggled,
          },
        ]" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useSidebar } from '@mptheme/client/composables';
import { useThemeLocaleData } from '@mptheme/client/composables/useThemeLocaleData';

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

      burgerClasses: [
        'bg-black',
        'dark:bg-white',
        'duration-100',
        'h-0.5',
        'inline-block',
        'rounded-lg',
        'transition-transform',
        'w-full',
      ],
    };
  },
});
</script>
