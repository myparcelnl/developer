<template>
  <header class="h-16">
    <ContentBlock
      variant="border-bottom"
      class="fixed flex h-16 left-0 right-0 top-0 z-40">
      <ContentContainer
        type="fluid"
        class="fixed flex flex-grow items-center px-2 relative z-20">
        <ToggleSidebarButton @toggle="onSidebarToggle" />

        <NavbarBrand logo-full-from="sm" />

        <div
          class="gap-2 grid grid-flow-col items-center ml-auto whitespace-nowrap"
          :style="linksWrapperStyle">
          <NavbarItems class="hidden lg:flex" />

          <ToggleDarkModeButton
            v-if="enableDarkMode"
            class="ml-0 p-3 w-12" />

          <NavbarSearch />
        </div>
      </ContentContainer>
    </ContentBlock>
  </header>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import ContentBlock from '@mptheme/client/views/layout/content-block/ContentBlock.vue';
import ContentContainer from '@mptheme/client/views/layout/content-container/ContentContainer.vue';
import NavbarBrand from '@mptheme/client/views/layout/navbar-brand/NavbarBrand.vue';
import NavbarItems from '@mptheme/client/views/layout/navbar-items/NavbarItems.vue';
import ToggleDarkModeButton from '@theme/ToggleDarkModeButton.vue';
import ToggleSidebarButton from '@mptheme/client/views/layout/toggle-sidebar-button/ToggleSidebarButton.vue';
import { useThemeLocaleData } from '@vuepress/theme-default/lib/client/composables';

export default defineComponent({
  name: 'MyPaHeader',

  components: {
    ContentBlock,
    NavbarBrand,
    NavbarItems,
    ContentContainer,
    ToggleDarkModeButton,
    ToggleSidebarButton,
  },

  emits: ['toggle-sidebar'],

  setup: (props, ctx) => {
    const themeLocale = useThemeLocaleData();
    const linksWrapperMaxWidth = ref(0);

    const linksWrapperStyle = computed(() => {
      if (!linksWrapperMaxWidth.value) {
        return {};
      }

      return {
        maxWidth: linksWrapperMaxWidth.value + 'px',
      };
    });
    const enableDarkMode = computed(() => themeLocale.value.darkMode);

    return {
      enableDarkMode,
      linksWrapperStyle,

      onSidebarToggle() {
        ctx.emit('toggle-sidebar');
      },
    };
  },
});
</script>
