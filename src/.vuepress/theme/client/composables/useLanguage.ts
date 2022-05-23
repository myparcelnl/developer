import { ComputedRef, computed } from 'vue';
import { LocaleItem, localeConfig } from '../../shared/locales/localeData';
import { PageLangRef, usePageLang } from '@vuepress/client';

type UsePageLanguage = () => {
  iso2: ComputedRef<string>;
  pageLang: PageLangRef;
  config: ComputedRef<LocaleItem | undefined>;
};

export const useLanguage: UsePageLanguage = () => {
  const pageLang = usePageLang();
  const iso2 = computed(() => pageLang.value.slice(0, 2).toLowerCase());
  const config = computed(() => localeConfig.find(({ lang }) => lang === pageLang.value));

  return {
    iso2,
    pageLang,
    config,
  };
};
