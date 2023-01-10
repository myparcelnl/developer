import {ComputedRef, computed} from 'vue';
import {Language} from '../../../plugins/parseTranslations/shared';
import {memoize} from 'lodash-unified';
import {useRouteLocale} from '@vuepress/client';
import {useSiteLocaleData} from '@mptheme/client/composables/useSiteLocaleData';

const LENGTH_ALPHA2_OR_LOCALE_SHORT = 2;

export type LanguageConfig = Language | undefined;

type UsePageLanguage = () => {
  current: ComputedRef<Language>;
  get: (lang: string) => Language | undefined;
  languages: Language[];
};

const useLanguageMemoized = memoize((input: string) => {
  const siteLocale = useSiteLocaleData();
  let check: (keyof Language)[] = ['locale'];

  if (input.length === LENGTH_ALPHA2_OR_LOCALE_SHORT) {
    check = ['alpha2', 'localeShort'];
  }

  return siteLocale.value.availableLanguages.find((config) => {
    return check.some((field) => config[field] === input);
  });
});

export const useLanguage: UsePageLanguage = () => {
  const siteLocale = useSiteLocaleData();
  const languages = siteLocale.value.availableLanguages;

  const routeLocale = useRouteLocale();

  return {
    current: computed(() => {
      const match: Language | undefined = siteLocale.value.availableLanguages.find(
        (config) => config.path === routeLocale.value,
      );

      return match ?? siteLocale.value.availableLanguages[0];
    }),
    get: (lang) => useLanguageMemoized(lang),
    languages,
  };
};
