/* eslint-disable @typescript-eslint/no-magic-numbers */
import { Language, ParseTranslationsPluginOptions } from '../shared';
import { Locale, getLocalePathPrefix } from './getLocalePathPrefix';

export const getAvailableLanguages = (translations: Locale[], options: ParseTranslationsPluginOptions): Language[] => {
  return translations.map((translation) => ({
    alpha2: translation.data.language.substring(3, 5).toLowerCase(),
    localeShort: translation.data.language.substring(0, 2).toLowerCase(),
    locale: translation.data.language,
    human: translation.data.languageName,
    path: getLocalePathPrefix(translation, options.defaultLocale),
  }));
};
