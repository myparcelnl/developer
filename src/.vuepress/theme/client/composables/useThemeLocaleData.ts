import {
  ThemeLocaleDataRef,
  useSiteLocaleData as realuseSiteLocaleData,
} from '@vuepress/plugin-theme-data/lib/client';
import { MyParcelThemeOptions } from '@mptheme/config.types';

export const useSiteLocaleData = (): ThemeLocaleDataRef<MyParcelThemeOptions> => {
  return realuseSiteLocaleData();
};
