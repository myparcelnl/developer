import { ComputedRef, computed } from 'vue';
import { MyPaNavLink, MyPaResolvedNavbarItem } from '@mptheme/config.types';
import { useSiteLocaleData, useTranslate } from '@mptheme/client/composables';
import { isDefined } from '@mptheme/shared/utils';
import { routeExists } from '@mptheme/client/utils/routeExists';
import { useFrontmatterLanguages } from '@mptheme/client/composables/useFrontmatterLanguages';
import { useLanguage } from '@mptheme/client/composables/useLanguage';
import { useLocaleLink } from '@mptheme/client/composables/useLocaleLink';
import { useRouteLocale } from '@vuepress/client';

type UseSwitchLanguage = () => {
  dropdown: ComputedRef<MyPaResolvedNavbarItem | undefined>;
};

/**
 * Get navbar config of select language dropdown.
 */
export const useSwitchLanguage: UseSwitchLanguage = () => {
  const routeLocale = useRouteLocale();
  const siteLocale = useSiteLocaleData();
  const translate = useTranslate();
  const language = useLanguage();

  const dropdown = computed(() => {
    const frontmatterLanguages = useFrontmatterLanguages();

    let children: MyPaNavLink[];
    const allLanguages = siteLocale.value.availableLanguages;

    if (frontmatterLanguages.value?.length) {
      children = frontmatterLanguages.value
        // Filter out current language
        .filter((item) => language.current?.value.locale !== item.language?.locale)
        .map((item) => {
          if (!item.language) {
            return undefined;
          }

          return useLocaleLink(item.language, item.path);
        })
        .filter(isDefined);
    } else {
      children = allLanguages
        // Filter out current language
        .filter((lang) => language.current?.value.locale !== lang.locale)
        .map((language) => useLocaleLink(language));
    }

    // Check if locale link exists in routes list
    children = children.filter((navLink) => routeExists(navLink.link));

    if (!children.length) {
      return;
    }

    return {
      text: translate('selectLanguageText') ?? '–',
      ariaLabel: translate('selectLanguageAriaLabel') ?? '–',
      locale: routeLocale,
      children,
    };
  });

  return {
    dropdown,
  };
};
