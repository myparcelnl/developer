import {ComputedRef} from 'vue';
import {MyPaSiteData} from '@mptheme/config.types';
import {useSiteLocaleData as realUseSiteLocaleData} from '@vuepress/client';

export const useSiteLocaleData = (): ComputedRef<MyPaSiteData> => {
  return realUseSiteLocaleData() as ComputedRef<MyPaSiteData>;
};
