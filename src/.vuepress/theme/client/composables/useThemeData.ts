import { ThemeDataRef, useThemeData as realUseThemeData } from '@vuepress/plugin-theme-data/lib/client';
import { MyParcelThemeOptions } from '@mptheme/config.types';

export const useThemeData = (): ThemeDataRef<MyParcelThemeOptions> => {
  return realUseThemeData();
};
