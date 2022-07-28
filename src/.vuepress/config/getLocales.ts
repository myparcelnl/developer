import { LocaleConfig } from '@vuepress/shared';
import fs from 'node:fs';
import path from 'path';
import { memoize } from 'lodash-unified';

type LocaleType = 'theme' | 'site';
type LocaleConfigs = Record<LocaleType, LocaleConfig>;

const memoizedGetSiteLocale = memoize(() => {
  return fs.readFileSync(path.resolve(__dirname, '../.temp/internal/siteLocale.json'));
});

const memoizedGetThemeLocale = memoize(() => {
  return fs.readFileSync(path.resolve(__dirname, '../.temp/internal/themeLocale.json'));
});

export const getSiteLocale = () => {
  return memoizedGetSiteLocale();
};
export const getThemeLocale = () => {
  return memoizedGetThemeLocale();
};

export const getLocales = (): LocaleConfigs => {
  return {
    site: getSiteLocale(),
    theme: getThemeLocale(),
  };
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
