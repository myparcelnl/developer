import {LanguageConfig, useSiteLocaleData} from '@mptheme/client/composables';
import {Language} from '../../../plugins/parseTranslations/shared';
import {NavLink} from '@vuepress/theme-default/lib/shared';
import {SiteLocaleConfig} from 'vuepress';
import {useRouteLocale} from '@vuepress/client';
import {useRouter} from 'vue-router';

type LocaleNavLink = NavLink & {language: LanguageConfig};

type LocaleConfig = SiteLocaleConfig & {
  language: string;
  languageName: string;
};

export const useLocaleLink = (targetLanguage: Language, path?: string): LocaleNavLink => {
  const router = useRouter();
  const routeLocale = useRouteLocale();
  const siteLocale = useSiteLocaleData();
  const targetSiteLocale = (siteLocale.value.locales[targetLanguage.path] ?? {}) as LocaleConfig;
  const targetLang = `${targetSiteLocale.lang}`;

  let link;

  if (targetLang === siteLocale.value.lang) {
    // If the target language is current language, stay at current link.
    link = router.currentRoute.value.fullPath;
  } else if (path) {
    link = targetLanguage.path + path;
  } else {
    // If the target language is not current language, link to the corresponding page of current page.
    const currentPath = router.currentRoute.value.path;
    link = currentPath.replace(routeLocale.value, targetLanguage.path);
  }

  if (!link.endsWith('/')) {
    link = `${link}/`.replace('.html', '/').replace(/\/+/g, '/');
  }

  return {
    link,
    text: targetSiteLocale.languageName ?? targetSiteLocale.language,
    language: targetLanguage,
  };
};
