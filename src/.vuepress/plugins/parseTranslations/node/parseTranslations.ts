import {ParseTranslationsPluginOptions} from '../shared';
import {Plugin} from '@vuepress/core/lib/types/plugin';
import {createSidebar} from '../../../config/sidebar/createSidebar';
import {getAvailableLanguages} from './getAvailableLanguages';
import {getConfiguration} from './getConfiguration';
import {getDefaultLanguage} from './getDefaultLanguage';
import {getLocalePathPrefix} from './getLocalePathPrefix';
import {getTranslations} from './getTranslations';
import {merge} from 'lodash-unified';

export const parseTranslationsPlugin = (options: ParseTranslationsPluginOptions): Plugin => {
  return {
    name: '@myparcel/vuepress-parse-sheets-translations',

    async onInitialized(app) {
      const [translations, config] = await Promise.all([getTranslations(options), getConfiguration(options.configDir)]);
      const availableLanguages = getAvailableLanguages(translations, options);
      const defaultLang = getDefaultLanguage(availableLanguages, options);

      app.siteData.lang = (defaultLang ?? availableLanguages[0])?.locale;

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      app.siteData.availableLanguages = Object.freeze(availableLanguages);

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      app.siteData.sidebar = createSidebar(app);

      merge(
        app.siteData.locales,
        [...translations, ...config].reduce((acc, locale) => {
          const root = getLocalePathPrefix(locale, options.defaultLocale);

          return {
            ...acc,
            [root]: {
              ...(acc[root] ?? {}),
              ...Object.entries(locale.data).reduce((acc, [key, translation]) => ({...acc, [key]: translation}), {}),
            },
          };
        }, {} as Record<string, Record<string, unknown>>),
      );
    },
  };
};
