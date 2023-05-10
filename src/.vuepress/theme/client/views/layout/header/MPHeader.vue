<template>
  <ContentBlock
    tag="header"
    variant="border-bottom"
    class="flex h-16 left-0 right-0 sticky top-0 z-40">
    <ContentContainer
      type="fluid"
      class="flex flex-grow items-center px-2 relative z-20">
      <ToggleSidebarButton />

      <NavbarBrand
        logo-full-from="sm"
        class="mr-2" />

      <div
        class="gap-2 grid grid-flow-col items-center ml-auto whitespace-nowrap"
        :style="linksWrapperStyle">
        <NavbarItems class="hidden lg:flex" />

        <ToggleColorModeButton />

        <LanguageDropdown />

        <NavbarSearch />
      </div>
    </ContentContainer>
  </ContentBlock>
</template>

<script lang="ts">
import {computed, defineComponent, ref} from 'vue';
import ContentBlock from '@mptheme/client/views/layout/content-block/ContentBlock.vue';
import ContentContainer from '@mptheme/client/views/layout/content-container/ContentContainer.vue';
import LanguageDropdown from '@mptheme/client/components/language-dropdown/LanguageDropdown.vue';
import NavbarBrand from '@mptheme/client/views/layout/header/navbar/navbar-brand/NavbarBrand.vue';
import NavbarItems from '@mptheme/client/views/layout/header/navbar/navbar-items/NavbarItems.vue';
import ToggleColorModeButton from '@mptheme/client/views/layout/header/toggle-color-mode-button/ToggleColorModeButton.vue';
import ToggleSidebarButton from '@mptheme/client/views/layout/header/toggle-sidebar-button/ToggleSidebarButton.vue';

export default defineComponent({
  name: 'MPHeader',

  components: {
    ContentBlock,
    ContentContainer,
    LanguageDropdown,
    NavbarBrand,
    NavbarItems,
    ToggleColorModeButton,
    ToggleSidebarButton,
  },

  setup: () => {
    const linksWrapperMaxWidth = ref(0);

    const linksWrapperStyle = computed(() => {
      if (!linksWrapperMaxWidth.value) {
        return {};
      }

      return {
        maxWidth: `${linksWrapperMaxWidth.value}px`,
      };
    });

    return {
      linksWrapperStyle,
    };
  },
});
</script>
