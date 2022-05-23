import { ComputedRef, computed } from 'vue';
import { DefaultThemeNormalPageFrontmatter, DefaultThemePageData } from '@vuepress/theme-default/lib/shared';
import { usePageData, usePageFrontmatter } from '@vuepress/client';
import { useThemeLocaleData, useTranslate } from '@mptheme/client/composables';
import { MyPaNavLink } from '@mptheme/config.types';
import { resolveEditLink } from '@vuepress/theme-default/lib/client/utils';

export const useEditNavLink = (): ComputedRef<MyPaNavLink | null> => {
  const frontmatter = usePageFrontmatter<DefaultThemeNormalPageFrontmatter>();
  const page = usePageData<DefaultThemePageData>();
  const themeLocale = useThemeLocaleData();

  return computed(() => {
    const showEditLink = frontmatter.value.editLink ?? themeLocale.value.editLink ?? true;

    if (!showEditLink) {
      return null;
    }

    const { repo, docsRepo = repo, docsBranch = 'main', docsDir = '' } = themeLocale.value;

    if (!docsRepo) {
      return null;
    }

    const translate = useTranslate();
    const editLink = resolveEditLink({
      docsRepo,
      docsBranch,
      docsDir,
      filePathRelative: page.value.filePathRelative,
    });

    if (!editLink) {
      return null;
    }

    return {
      text: translate('editLinkText') ?? 'Edit this page',
      link: editLink,
    };
  });
};
