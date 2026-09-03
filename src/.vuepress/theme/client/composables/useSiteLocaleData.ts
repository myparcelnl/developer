import {type ComputedRef} from 'vue';
import {useSiteLocaleData as realUseSiteLocaleData} from '@vuepress/client';
import {type MyPaSiteData} from '@mptheme/config.types';

export const useSiteLocaleData = (): ComputedRef<MyPaSiteData> => {
  return realUseSiteLocaleData() as ComputedRef<MyPaSiteData>;
};
