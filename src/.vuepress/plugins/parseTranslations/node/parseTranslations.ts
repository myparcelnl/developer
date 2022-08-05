import { getTranslations } from './getTranslations';
import { ParseTranslationsPluginOptions } from '../shared';
import { Plugin } from '@vuepress/core/lib/types/plugin';
import { createSidebar } from '../../../config/sidebar/createSidebar';
import { getAvailableLanguages } from './getAvailableLanguages';
import { getDefaultLanguage } from './getDefaultLanguage';
import { getLocalePathPrefix } from './getLocalePathPrefix';
import { merge } from 'lodash-unified';
import { getConfiguration } from './getConfiguration';

export const parseTranslationsPlugin = (options: ParseTranslationsPluginOptions): Plugin => {
  return {
    name: '@myparcel/vuepress-parse-sheets-translations',

    onInitialized: async function(app) {
      const [translations, config] = await Promise.all([getTranslations(options), getConfiguration(options.configDir)]);
      const availableLanguages = getAvailableLanguages(translations, options);
      const defaultLang = getDefaultLanguage(availableLanguages, options);

      app.siteData.lang = (defaultLang ?? availableLanguages[0])?.locale;

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      app.siteData.availableLanguages = Object.freeze(availableLanguages);

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      app.siteData.sidebar = createSidebar();

      merge(
        app.siteData.locales,
        [...translations, ...config].reduce((acc, locale) => {
          const root = getLocalePathPrefix(locale, options.defaultLocale);

          return {
            ...acc,
            [root]: {
              ...acc[root] ?? {},
              ...Object
                .entries(locale.data)
                .reduce((acc, [key, translation]) => ({ ...acc, [key]: translation }), {}),
            },
          };
        }, {} as Record<string, Record<string, unknown>>),
      );
    },
  };
};
