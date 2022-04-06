import { ThemeDataRef, useThemeData as realUseThemeData } from '@vuepress/plugin-theme-data/lib/client';
import { ThemeConfig } from '@mptheme/config.types';

export const useThemeData = (): ThemeDataRef<ThemeConfig> => {
  return realUseThemeData();
};
