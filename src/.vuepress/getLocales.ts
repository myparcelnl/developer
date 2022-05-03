import { LocaleConfig } from 'vuepress';
import enGb from './public/translations/en-GB.json';
import nlNl from './public/translations/nl-NL.json';

export const getLocales = (): LocaleConfig => ({
  '/': enGb,
  '/nl/': nlNl,
});
