import { ComputedRef, computed } from 'vue';
import { Language } from '../../../plugins/parseTranslations/shared';
import { MyPaPageFrontmatter } from '@mptheme/config.types';
import { toArray } from '@mptheme/client/utils/toArray';
import { useLanguage } from '@mptheme/client/composables/index';
import { usePageFrontmatter } from '@vuepress/client';

interface LanguageArrayItem {
  path?: string;
  localeShort?: string;
  language?: Language;
}

export const useFrontmatterLanguages = (): ComputedRef<LanguageArrayItem[]> => {
  const language = useLanguage();
  const frontmatter = usePageFrontmatter<MyPaPageFrontmatter>();
  const { languages } = frontmatter.value;

  return computed(() => {
    let languagesArray: LanguageArrayItem[] = [];

    if (typeof languages === 'string' || Array.isArray(languages)) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      languagesArray = toArray(languages)
        .map((lang) => {
          let localeShort = lang;
          let path: string | undefined = undefined;

          if (typeof lang !== 'string') {
            [localeShort, path] = Object.entries(lang)[0] as [string, string];
          }

          return { localeShort, path };
        });
    } else if (languages) {
      languagesArray = Object.entries(languages).map(([localeShort, path]) => ({
        path: path ?? undefined,
        localeShort: localeShort,
      }));
    }

    return languagesArray.map((lang) => ({
      ...lang,
      language: lang.localeShort ? language.get(lang.localeShort) : undefined,
    }));
  });
};
