import { SiteLocaleData, useSiteLocaleData as realUseSiteLocaleData } from '@vuepress/client';
import { ComputedRef } from 'vue';

type Created = ComputedRef<SiteLocaleData & Record<string, string>>;
export const useSiteLocaleData = (): Created => {
  return realUseSiteLocaleData() as Created;
};
