import {usePageData, usePageFrontmatter} from 'vuepress/client';
import {type ComputedRef, computed} from 'vue';
import {type DefaultThemePageData} from '@vuepress/theme-default';
import {type MyPaPageFrontmatter} from '@mptheme/config.types';

export const useContributors = (): ComputedRef<null | NonNullable<DefaultThemePageData['git']>['contributors']> => {
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
