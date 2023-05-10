import {ComputedRef, computed} from 'vue';
import {MyPaNavLink, MyPaResolvedNavbarItem} from '@mptheme/config.types';
import {useSiteLocaleData, useTranslate} from '@mptheme/client/composables';
import {isDefined} from '@mptheme/shared/utils';
import {resolveLinks} from '@mptheme/client/utils/resolveLinks';
import {useFrontmatterLanguages} from '@mptheme/client/composables/useFrontmatterLanguages';
import {useLanguage} from '@mptheme/client/composables/useLanguage';
import {useLocaleLink} from '@mptheme/client/composables/useLocaleLink';
import {useRouteLocale} from '@vuepress/client';

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

  const allLinks = computed(() =>
    siteLocale.value.availableLanguages
      // Filter out current language
      .filter((lang) => language.current?.value.locale !== lang.locale)
      .map((language) => useLocaleLink(language)),
  );

  const dropdown = computed(() => {
    const frontmatterLanguages = useFrontmatterLanguages();

    let children: MyPaNavLink[];

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
      children = allLinks.value;
    }

    const resolvedLinks = resolveLinks(children);

    if (!resolvedLinks.length) {
      return;
    }

    return {
      text: translate('selectLanguageText') ?? '–',
      ariaLabel: translate('selectLanguageAriaLabel') ?? '–',
      locale: routeLocale,
      children: resolvedLinks,
    };
  });

  return {
    dropdown,
  };
};
