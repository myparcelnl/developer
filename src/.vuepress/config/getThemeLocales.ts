import { MyParcelThemeOptions } from '@mptheme/config.types';
import enGb from '../public/translations/en-GB.json';
import nlNl from '../public/translations/nl-NL.json';

export const getThemeLocales = (): MyParcelThemeOptions['locales'] => ({
  '/': enGb,
  '/nl/': nlNl,
});
