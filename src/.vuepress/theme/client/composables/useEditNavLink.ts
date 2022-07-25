import { ComputedRef, computed } from 'vue';
import { DefaultThemeNormalPageFrontmatter, DefaultThemePageData } from '@vuepress/theme-default/lib/shared';
import { usePageData, usePageFrontmatter } from '@vuepress/client';
import { MyPaNavLink } from '@mptheme/config.types';
import { resolveEditLink } from '@vuepress/theme-default/lib/client/utils';
import { useThemeLocaleData } from '@mptheme/client/composables';

export const useEditNavLink = (): ComputedRef<MyPaNavLink | null> => {
  const themeLocale = useThemeLocaleData();
  const page = usePageData<DefaultThemePageData>();
  const frontmatter = usePageFrontmatter<DefaultThemeNormalPageFrontmatter>();

  return computed(() => {
    const showEditLink = frontmatter.value.editLink ?? themeLocale.value.editLink ?? true;

    if (!showEditLink) {
      return null;
    }

    const {
      repo,
      docsRepo = repo,
      docsBranch = 'main',
      docsDir = '',
      editLinkText,
    } = themeLocale.value;

    if (!docsRepo) {
      return null;
    }

    const editLink = resolveEditLink({
      docsRepo,
      docsBranch,
      docsDir,
      filePathRelative: page.value.filePathRelative,
      editLinkPattern: frontmatter.value.editLinkPattern ?? themeLocale.value.editLinkPattern,
    });

    if (!editLink) {
      return null;
    }

    return {
      text: editLinkText ?? 'Edit this page',
      link: editLink,
    };
  });
};
