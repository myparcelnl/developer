import {ThemeDataRef, useThemeLocaleData as realUseThemeLocaleData} from '@vuepress/plugin-theme-data/lib/client';
import {MyPaThemeData} from '@mptheme/config.types';

export const useThemeLocaleData = (): ThemeDataRef<MyPaThemeData> => {
  return realUseThemeLocaleData();
};
