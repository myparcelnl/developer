export const LOCALE_EN = 'en';

export const LOCALE_NL = 'nl';

export const LOCALE_DEFAULT = LOCALE_EN;

export const LANG_EN = 'en-GB';

export const LANG_NL = 'nl-NL';

export const LANG_DEFAULT = LANG_EN;

export interface LocaleItem {
  locale: string;
  path: string;
  lang: string;
  flag: string;
}

export const localeConfig: LocaleItem[] = [
  {
    locale: LOCALE_EN,
    lang: LANG_EN,
    path: '/',
    flag: 'gb',
  },
  {
    locale: LOCALE_NL,
    lang: LANG_NL,
    path: '/nl/',
    flag: 'nl',
  },
];
