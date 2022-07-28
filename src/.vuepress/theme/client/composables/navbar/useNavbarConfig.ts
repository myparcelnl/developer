import { ComputedRef, computed } from 'vue';
import { MyPaResolvedNavbarItem } from '@mptheme/config.types';
import { resolveNavbarItem } from '@mptheme/client/composables/navbar/resolveNavbarItem';
import { useSiteLocaleData } from '@mptheme/client/composables';

export const useNavbarConfig = (): ComputedRef<MyPaResolvedNavbarItem[]> => {
  const themeLocale = useSiteLocaleData();

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
