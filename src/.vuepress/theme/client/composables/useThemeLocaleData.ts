import {
  ThemeLocaleDataRef,
  useThemeLocaleData as realUseThemeLocaleData,
} from '@vuepress/plugin-theme-data/lib/client';
import { MyParcelThemeOptions } from '@mptheme/config.types';

export const useThemeLocaleData = (): ThemeLocaleDataRef<MyParcelThemeOptions> => {
  return realUseThemeLocaleData();
};
