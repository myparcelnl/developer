import {ComputedRef, computed} from 'vue';
import {usePageData, usePageFrontmatter} from '@vuepress/client';
import {DefaultThemePageData} from '@vuepress/theme-default/lib/shared';
import {MyPaPageFrontmatter} from '@mptheme/config.types';

export const useContributors = (): ComputedRef<null | Required<DefaultThemePageData['git']>['contributors']> => {
  const page = usePageData<DefaultThemePageData>();
  const frontmatter = usePageFrontmatter<MyPaPageFrontmatter>();

  return computed(() => {
    const showContributors = frontmatter.value.contributors ?? true;

    if (!showContributors) {
      return null;
    }

    return page.value.git?.contributors ?? null;
  });
};
