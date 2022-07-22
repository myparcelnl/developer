import { ComputedRef, computed } from 'vue';
import { DefaultThemeNormalPageFrontmatter, DefaultThemePageData } from '@vuepress/theme-default/lib/shared';
import { usePageData, usePageFrontmatter } from '@vuepress/client';

export const useContributors = (): ComputedRef<null | Required<DefaultThemePageData['git']>['contributors']> => {
  const page = usePageData<DefaultThemePageData>();
  const frontmatter = usePageFrontmatter<DefaultThemeNormalPageFrontmatter>();

  return computed(() => {
    const showContributors = frontmatter.value.contributors ?? true;

    if (!showContributors) {
      return null;
    }

    return page.value.git?.contributors ?? null;
  });
};
