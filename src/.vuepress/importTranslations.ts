import path from 'node:path';
import fs from 'node:fs';
import { LocaleConfig } from '@vuepress/shared';
import { Plugin } from '@vuepress/core/lib/types/plugin';

// const __dirname = fileURLToPath(path.dirname(import.meta.url));

const translationsDir = `${__dirname}/public/translations`;

type LocaleType = 'theme' | 'site';
type LocaleConfigs = Record<LocaleType, LocaleConfig>;

export const importTranslationsPlugin = (): Plugin => {
  return {
    name: '@myparcel/vuepress-import-sheets-translations',

    async onInitialized(app) {
      const locales = await Promise.all(fs.readdirSync(translationsDir)
        .filter((file) => file.endsWith('.json'))
        .map(async(filename) => {
          const file = await fs.promises.readFile(`${translationsDir}/${filename}`);

          return {
            language: path.basename(filename, '.json'),
            data: JSON.parse(file.toString('utf-8')),
          };
        }));

      app.siteData.locales = locales.reduce((acc, locale) => {
        const root = locale.language === 'en' ? '/' : `/${locale.language}/`;

        return {
          ...acc,
          [root]: Object.entries(locale.data).reduce((acc, [key, val]) => {
            return {
              ...acc,
              [key]: val,
            };
          }, {}),
        };
      }, {});
    },
  };
};

// const locales = await Promise.all(fs.readdirSync(translationsDir)
//     .filter((file) => file.endsWith('.json'))
//     .map(async(filename) => {
//       const file = await fs.promises.readFile(`${translationsDir}/${filename}`);
//
//       return {
//         language: path.basename(filename, '.json'),
//         data: JSON.parse(file.toString('utf-8')),
//       };
//     }));
//
//   const siteLocale = {};
//   const themeLocale = {};
//
//   locales.forEach((locale) => {
//     const root = locale.language === 'en' ? '/' : `/${locale.language}/`;
//
//     // @ts-ignore
//     siteLocale[root] ??= {};
//     // @ts-ignore
//     themeLocale[root] ??= {};
//
//     Object
//       .entries(locale.data)
//       .forEach(([key, value]) => {
//         const split = key.split('.');
//         const [type, ...keyParts] = split;
//         const newKey = keyParts.join('.');
//
//         switch (type) {
//           case 'theme':
//             // @ts-ignore
//             themeLocale[root][newKey] = value;
//             break;
//           case 'site':
//             // @ts-ignore
//             siteLocale[root][newKey] = value;
//             break;
//         }
//       });
//   });
//
//   return { siteLocale, themeLocale };
