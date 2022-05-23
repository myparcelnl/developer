import { useRouteLocale, useSiteLocaleData } from '@vuepress/client';
import { NavLink } from '@vuepress/theme-default/lib/shared';
import { localeConfig } from '../../shared/locales/localeData';
import { useRouter } from 'vue-router';
import { useThemeLocaleData } from '@vuepress/theme-default/lib/client/composables';

type LocaleNavLink = NavLink & { localeConfig: (typeof localeConfig[number]) | undefined };

export const useLocaleLink = (targetLocalePath: string): LocaleNavLink => {
  const router = useRouter();
  const routeLocale = useRouteLocale();
  const siteLocale = useSiteLocaleData();
  const themeLocale = useThemeLocaleData();
  const targetThemeLocale = themeLocale.value.locales?.[targetLocalePath] ?? {};
  const targetSiteLocale = siteLocale.value.locales?.[targetLocalePath] ?? {};
  const targetLang = `${targetSiteLocale.lang}`;
  let link;

  if (targetLang === siteLocale.value.lang) {
    // If the target language is current language, stay at current link.
    link = router.currentRoute.value.fullPath;
  } else {
    // If the target language is not current language, link to the corresponding page of current page.
    const currentPath = router.currentRoute.value.path;

    link = currentPath
      .replace(routeLocale.value, targetLocalePath)
      .replace('.html', '');
  }

  return {
    localeConfig: localeConfig.find(({ lang }) => lang === targetLang),
    link,
    text: targetThemeLocale.selectLanguageName ?? targetLang,
  };
};
