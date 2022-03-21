import { computed, ComputedRef } from 'vue';
import { DefaultThemeNormalPageFrontmatter, DefaultThemePageData } from '@vuepress/theme-default/lib/shared';
import { usePageData, usePageFrontmatter } from '@vuepress/client';
import { useThemeLocaleData } from '@vuepress/theme-default/lib/client/composables';

export const useLastUpdated = (): ComputedRef<null | string> => {
  const themeLocale = useThemeLocaleData();
  const page = usePageData<DefaultThemePageData>();
  const frontmatter = usePageFrontmatter<DefaultThemeNormalPageFrontmatter>();

  return computed(() => {
    const showLastUpdated
      = frontmatter.value.lastUpdated ?? themeLocale.value.lastUpdated ?? true;

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
