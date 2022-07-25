import { LocaleConfig } from '@vuepress/shared';
import { useThemeLocaleData } from '@mptheme/client/composables/useThemeLocaleData';

export const useTranslate = (): ((input: string) => string) => {
  const localeData = useThemeLocaleData();

  return (key) => {
    if (localeData.value.hasOwnProperty(key)) {
      return localeData.value[key as keyof LocaleConfig[string]];
    }

    if (import.meta.env.DEV) {
      // eslint-disable-next-line no-console
      console.warn('Missing translation: ' + key);
    }

    return '';
  };
};
