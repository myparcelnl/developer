import { localeToShort } from './localeToShort';

export interface Locale {
  localeShort: string;
  data: Record<string, string>;
}

export const getLocalePathPrefix = (locale: Locale, defaultLocale: string): string => {
  return locale.localeShort === localeToShort(defaultLocale)
    ? '/'
    : `/${locale.localeShort}/`;
};
