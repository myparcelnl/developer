import {computed, provide} from 'vue';
import {useSiteLocaleData, useThemeLocaleData} from '@mptheme/client/composables';
import {MyPaPageFrontmatter} from '@mptheme/config.types';
import {resolveSidebarItems} from './resolveSidebarItems';
import {sidebarItemsSymbol} from './sidebarItemsSymbol';
import {usePageFrontmatter} from '@vuepress/client';

/**
 * Create sidebar items ref and provide as global computed in setup.
 */
export const setupSidebarItems = (): void => {
  const siteLocale = useSiteLocaleData();
  const themeLocale = useThemeLocaleData();
  const frontmatter = usePageFrontmatter<MyPaPageFrontmatter>();
  const sidebarItems = computed(() => resolveSidebarItems(frontmatter.value, siteLocale.value, themeLocale.value));

  provide(sidebarItemsSymbol, sidebarItems);
};
