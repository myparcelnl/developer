import { LocaleConfig } from '@vuepress/shared';
import path from 'path';
import { localeConfig } from '@mptheme/shared/locales/localeData';
import fs from 'node:fs';

const DEFAULT_LANGUAGE = 'en';

type LocaleType = 'theme' | 'site';
type LocaleConfigs = Record<LocaleType, LocaleConfig>;

const LOCALE_TYPES: LocaleType[] = ['theme', 'site'];

let localeData: LocaleConfigs;

export const getLocales = (): LocaleConfigs => {
  const themeLocale = fs.readFileSync(path.resolve(__dirname, '../.temp/internal/themeLocale.json'));
  const siteLocale = fs.readFileSync(path.resolve(__dirname, '../.temp/internal/siteLocale.json'));

  // const locales = (await Promise
  //   .all(Object.entries(files)
  //     .map(async([key, func]) => {
  //       return {
  //         language: path.basename(key, '.json'),
  //         data: (await func()).default,
  //       };
  //     }))) as {data: Record<string, string>; language: string}[];
  //
  // const siteLocale: LocaleConfig = {};
  // const themeLocale: LocaleConfig = {};
  //
  // locales.forEach((locale) => {
  //   const root = locale.language === DEFAULT_LANGUAGE ? '/' : `/${locale.language}/`;
  //
  //   siteLocale[root] ??= {};
  //   themeLocale[root] ??= {};
  //
  //   Object.entries(locale.data).forEach(([key, value]) => {
  //     switch (value.split('.')[0]) {
  //       case 'theme':
  //         themeLocale[root][key] = value;
  //         break;
  //       case 'site':
  //         siteLocale[root][key] = value;
  //         break;
  //     }
  //   });
  // });
  //

  const newVar = {
    site: siteLocale.toString('utf-8'),
    theme: themeLocale.toString('utf-8'),
  };

  console.log(newVar);
  return newVar;
};

//   const locales = await Promise
//     .all(Object.entries(files)
//       .map(async([key, func]) => {
//         return {
//           language: path.basename(key, '.json'),
//           data: (await func()).default,
//         };
//       }));
//
//   return locales.reduce((acc, val) => {
//     const root = val.language === DEFAULT_LANGUAGE ? '/' : `/${val.language}/`;
//
//     return {
//       ...acc,
//       [root]: val.data,
//     };
//   }, {} as LocaleConfig);
