import { getLocales } from './getLocales';

export const getThemeLocales = async() => {
  const locales = await getLocales();

  return locales.theme;
};
