import { computed, provide } from 'vue';
import { DefaultThemeNormalPageFrontmatter } from '@vuepress/theme-default/lib/shared';
import { resolveSidebarItems } from './resolveSidebarItems';
import { sidebarItemsSymbol } from './sidebarItemsSymbol';
import { usePageFrontmatter } from '@vuepress/client';
import { useThemeLocaleData } from '@mptheme/client/composables';

/**
 * Create sidebar items ref and provide as global computed in setup.
 */
export const setupSidebarItems = (): void => {
  const themeLocale = useThemeLocaleData();
  const frontmatter = usePageFrontmatter<DefaultThemeNormalPageFrontmatter>();
  const sidebarItems = computed(() => resolveSidebarItems(frontmatter.value, themeLocale.value));
  provide(sidebarItemsSymbol, sidebarItems);
};
