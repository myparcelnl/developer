import {LocaleConfig} from '@vuepress/shared';
import {useSiteLocaleData} from '@mptheme/client/composables';

const missingCache: string[] = [];

export const useTranslate = (): ((input: string) => string) => {
  const localeData = useSiteLocaleData();

  return (key) => {
    if (localeData.value.hasOwnProperty(key)) {
      return localeData.value[key as keyof LocaleConfig[string]];
    }

    if (import.meta.env.DEV && !missingCache.includes(key)) {
      // eslint-disable-next-line no-console
      console.warn(`Missing translation: ${key}`);
      missingCache.push(key);
    }

    return '';
  };
};
