import { ClientOnly, useSiteLocaleData, withBase } from '@vuepress/client';
import { computed, FunctionalComponent, h } from 'vue';
import { useDarkMode } from '@vuepress/theme-default/lib/client/composables';
import { useThemeLocaleData } from '@vuepress/theme-default/lib/client';

export const NavbarBrandLogo: FunctionalComponent = () => {
  const siteLocale = useSiteLocaleData();
  const themeLocale = useThemeLocaleData();
  const isDarkMode = useDarkMode();

  const navbarBrandLogo = computed(() => {
    if (isDarkMode.value && themeLocale.value.logoDark !== undefined) {
      return themeLocale.value.logoDark;
    }

    return themeLocale.value.logo;
  });

  if (!navbarBrandLogo.value) {
    return null;
  }

  const img = h('img', {
    class: 'h-full',
    src: withBase(navbarBrandLogo.value),
    alt: siteLocale.value.title,
  });

  if (!themeLocale.value.logoDark) {
    return img;
  }

  /*
   * wrap brand logo with <ClientOnly> to avoid ssr-mismatch
   * when using a different brand logo in dark mode
   */
  return h(ClientOnly, () => img);
};
