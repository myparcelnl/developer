import {ComputedRef, computed} from 'vue';
import {usePageData, usePageFrontmatter} from '@vuepress/client';
import {DefaultThemePageData} from '@vuepress/theme-default/lib/shared';
import {MyPaPageFrontmatter} from '@mptheme/config.types';
import {useThemeLocaleData} from '@mptheme/client/composables';

export const useLastUpdated = (): ComputedRef<null | string> => {
  const frontmatter = usePageFrontmatter<MyPaPageFrontmatter>();
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
