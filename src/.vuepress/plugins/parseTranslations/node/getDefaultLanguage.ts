import { Language, ParseTranslationsPluginOptions } from '../shared';

/**
 *
 */
export function getDefaultLanguage(availableLanguages: Language[], options: ParseTranslationsPluginOptions): Language | undefined {
  return availableLanguages.find((lang) => lang.alpha2 === options.defaultLocale);
}
