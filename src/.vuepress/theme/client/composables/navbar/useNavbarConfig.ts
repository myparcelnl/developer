import { ComputedRef, computed } from 'vue';
import { MyPaResolvedNavbarItem } from '@mptheme/config.types';
import { resolveNavbarItem } from '@mptheme/client/composables/navbar/resolveNavbarItem';
import { useThemeLocaleData } from '@mptheme/client/composables/useThemeLocaleData';

export const useNavbarConfig = (): ComputedRef<MyPaResolvedNavbarItem[]> => {
  const themeLocale = useThemeLocaleData();

  return computed(() => {
    const navbarItems = (themeLocale.value.navbar || []).map(resolveNavbarItem);
    // TODO: Multilanguage
    // const languageItems = useNavbarSelectLanguage();

    return [
      ...navbarItems,
      // ...languageItems.value,
    ];
  });
};
