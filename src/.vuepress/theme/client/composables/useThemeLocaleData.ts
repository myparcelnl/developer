import {type ThemeDataRef, useThemeLocaleData as realUseThemeLocaleData} from '@vuepress/plugin-theme-data/client';
import {type MyPaThemeData} from '@mptheme/config.types';

export const useThemeLocaleData = (): ThemeDataRef<MyPaThemeData> => {
  return realUseThemeLocaleData();
};
