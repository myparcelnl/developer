import { ComputedRef, computed } from 'vue';
import { DefaultThemeNormalPageFrontmatter, DefaultThemePageData } from '@vuepress/theme-default/lib/shared';
import { usePageData, usePageFrontmatter } from '@vuepress/client';
import { useThemeLocaleData } from '@mptheme/client/composables/useThemeLocaleData';

export const useLastUpdated = (): ComputedRef<null | string> => {
  const frontmatter = usePageFrontmatter<DefaultThemeNormalPageFrontmatter>();
  const page = usePageData<DefaultThemePageData>();
  const themeLocale = useThemeLocaleData();

  return computed(() => {
    const showLastUpdated = frontmatter.value.lastUpdated ?? themeLocale.value.lastUpdated ?? true;

    if (!showLastUpdated) {
      return null;
    }

    if (!page.value.git?.updatedTime) {
      return null;
    }

    const updatedDate = new Date(page.value.git?.updatedTime);

    return updatedDate.toLocaleString();
  });
};
