export interface Language {

  /**
   * Alpha 2 code. Example: be.
   */
  alpha2: string;

  /**
   * Human text. Example: Nederlands.
   */
  human: string;

  /**
   * Locale code. Example: nl-BE.
   */
  locale: string;

  /**
   * Short locale code. Example: nl.
   */
  localeShort: string;

  /**
   * Path prefix for translations. Example: /nl/.
   */
  path: string;
}

export interface ParseTranslationsPluginOptions {
  dest: string;
  defaultLocale: string;
  configDir: string;
}
