import { ComputedRef, computed } from 'vue';
import { ResolvedNavbarItem } from '@vuepress/theme-default/lib/shared';
import { useLanguage } from '@mptheme/client/composables/useLanguage';
import { useLocaleLink } from '@mptheme/client/composables/useLocaleLink';
import { useSiteLocaleData } from '@mptheme/client/composables';

/**
 * Get navbar config of select language dropdown.
 */
export const useNavbarSelectLanguage = (): ComputedRef<ResolvedNavbarItem | undefined> => {
  const siteLocale = useSiteLocaleData();
  const language = useLanguage();

  return computed<ResolvedNavbarItem | undefined>(() => {
    const localePaths = Object.keys(siteLocale.value.locales);

    // do not display language selection dropdown if there is only one language
    if (!localePaths.length || localePaths.length === 1) {
      return;
    }

    const languageDropdown: ResolvedNavbarItem = {
      text: siteLocale.value.selectLanguageText ?? 'unknown language',
      ariaLabel: siteLocale.value.selectLanguageAriaLabel ?? 'unknown language',
      children: localePaths
        // Filter out the current language
        .filter((locale) => language.config.value?.locale !== locale)
        .map(useLocaleLink),
    };

    return languageDropdown;
  });
};
