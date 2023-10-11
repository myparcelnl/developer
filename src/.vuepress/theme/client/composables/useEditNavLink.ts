import {computed, type ComputedRef} from 'vue';
import {type DefaultThemePageData} from '@vuepress/theme-default';
import {usePageData, usePageFrontmatter} from '@vuepress/client';
import {type MyPaNavLink, type MyPaPageFrontmatter} from '@mptheme/config.types';
import {useThemeLocaleData, useTranslate} from '@mptheme/client/composables';

export const useEditNavLink = (): ComputedRef<MyPaNavLink | null> => {
  const frontmatter = usePageFrontmatter<MyPaPageFrontmatter>();
  const page = usePageData<DefaultThemePageData>();
  const themeLocale = useThemeLocaleData();

  return computed(() => {
    const showEditLink = frontmatter.value.editLink ?? themeLocale.value.editLink ?? true;

    if (!showEditLink) {
      return null;
    }

    const {repo, docsRepo = repo, docsBranch = 'main', docsDir = ''} = themeLocale.value;

    if (!docsRepo) {
      return null;
    }

    const translate = useTranslate();
    const {filePathRelative} = page.value;

    if (!filePathRelative) {
      return null;
    }

    return {
      text: translate('editLinkText') ?? 'Edit this page',
      link: `${docsRepo}/edit/${docsBranch}/${docsDir}/${filePathRelative}`,
    };
  });
};
