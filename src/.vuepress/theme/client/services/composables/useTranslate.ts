import { useSiteLocaleData } from '@mptheme/client/services/composables/useSiteLocaleData';

export const useTranslate = (): (input: string) => string => {
  const locale = useSiteLocaleData();

  return (input) => {
    if (locale.value.hasOwnProperty(input)) {
      return locale.value[input];
    }

    return input;
  };
};
