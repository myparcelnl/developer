import {computed, provide} from 'vue';
import {usePageFrontmatter} from '@vuepress/client';
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
  const sidebarItems = computed(() => resolveSidebarItems(frontmatter.value, siteLocale.value, themeLocale.value));

  provide(sidebarItemsSymbol, sidebarItems);
};
