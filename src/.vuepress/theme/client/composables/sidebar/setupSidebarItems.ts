import {usePageData, usePageFrontmatter, useRoutePath} from 'vuepress/client';
import {computed, provide} from 'vue';
import {useHeaders} from '@vuepress/helper/client';
import {type MyPaPageFrontmatter} from '@mptheme/config.types';
import {useSiteLocaleData, useThemeLocaleData} from '@mptheme/client/composables';
import {sidebarItemsSymbol} from './sidebarItemsSymbol';
import {resolveSidebarItems} from './resolveSidebarItems';

/**
 * Create sidebar items ref and provide as global computed in setup.
 */
export const setupSidebarItems = (): void => {
  const siteLocale = useSiteLocaleData();
  const themeLocale = useThemeLocaleData();
  const frontmatter = usePageFrontmatter<MyPaPageFrontmatter>();
  const page = usePageData();
  const routePath = useRoutePath();
  const headers = useHeaders({levels: [2, 3]});

  const sidebarItems = computed(() =>
    resolveSidebarItems(frontmatter.value, siteLocale.value, themeLocale.value, {
      headers: headers.value,
      routePath: routePath.value,
      title: page.value.title,
    }),
  );

  provide(sidebarItemsSymbol, sidebarItems);
};
