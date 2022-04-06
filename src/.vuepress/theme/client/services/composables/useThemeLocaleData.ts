import {
  ThemeLocaleDataRef,
  useThemeLocaleData as realUseThemeLocaleData,
} from '@vuepress/plugin-theme-data/lib/client';
import { ThemeConfig } from '@mptheme/config.types';

export const useThemeLocaleData = (): ThemeLocaleDataRef<ThemeConfig> => {
  return realUseThemeLocaleData();
};
