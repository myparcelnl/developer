<script lang="ts">
import { computed, defineComponent, onMounted, ref } from 'vue';
import { useRouteLocale, useSiteLocaleData } from '@vuepress/client';
import NavbarBrand from './navbar-brand/NavbarBrand.vue';
import { useThemeLocaleData } from '@vuepress/theme-default/lib/client';

export default defineComponent({
  name: 'MyHeader',
  components: {
    NavbarBrand,
  },
  // NavbarItems,
  // NavbarSearch,
  // ToggleDarkModeButton,
  // ToggleSidebarButton,
  // },

  emits: ['toggle-sidebar'],
  setup: () => {
    const routeLocale = useRouteLocale();
    const siteLocale = useSiteLocaleData();
    const themeLocale = useThemeLocaleData();

    console.log('routeLocale', routeLocale.value);
    console.log('siteLocale', siteLocale.value);
    console.log('themeLocale', themeLocale.value);

    const navbar = ref<HTMLElement | null>(null);
    const navbarBrand = ref<HTMLElement | null>(null);

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

    /**
     *
     */
    const getCssValue = (
      el: HTMLElement | null,
      property: keyof CSSStyleDeclaration,
    ): number => {
      // NOTE: Known bug, will return 'auto' if style value is 'auto'
      const val = el?.ownerDocument?.defaultView?.getComputedStyle(el, null)?.[
        property
      ];

      const num = parseInt(val);
      return isNaN(num) ? 0 : num;
    };

    // avoid overlapping of long title and long navbar links
    onMounted(() => {
      // TODO: migrate to css var
      // refer to _variables.scss
      const MOBILE_DESKTOP_BREAKPOINT = 719;
      const navbarHorizontalPadding =
        getCssValue(navbar.value, 'paddingLeft') +
        getCssValue(navbar.value, 'paddingRight');
      const handleLinksWrapWidth = (): void => {
        if (window.innerWidth <= MOBILE_DESKTOP_BREAKPOINT) {
          linksWrapperMaxWidth.value = 0;
        } else {
          linksWrapperMaxWidth.value =
            navbar.value!.offsetWidth -
            navbarHorizontalPadding -
            (navbarBrand.value?.offsetWidth || 0);
        }
      };
      handleLinksWrapWidth();
      window.addEventListener('resize', handleLinksWrapWidth, false);
      window.addEventListener('orientationchange', handleLinksWrapWidth, false);
    });

    return {
      getCssValue,
      themeLocale,
      navbar,
      navbarBrand,
      linksWrapperMaxWidth,
      linksWrapperStyle,
      enableDarkMode,
    };
  },
});
</script>

<template>
  <header
ref="navbar" class="flex justify-between w-full">
    <!--    <ToggleSidebarButton @toggle="$emit('toggle-sidebar')" /> -->

    <div class="bg-rose-300">
      <NavbarBrand />
    </div>

    <div :style="linksWrapperStyle">
      <NavbarItems class="can-hide" />
      <ToggleDarkModeButton v-if="enableDarkMode" />
      <NavbarSearch />
    </div>
  </header>
</template>
