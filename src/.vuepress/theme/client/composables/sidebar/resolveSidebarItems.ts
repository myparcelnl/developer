import { DefaultThemeData } from 'vuepress';
import { DefaultThemeNormalPageFrontmatter } from '@vuepress/theme-default/lib/shared';
import { MyPaResolvedSidebarItem } from '@mptheme/config.types';
import { isArray } from 'lodash-unified';
import { isPlainObject } from '@vuepress/shared';
import { resolveArraySidebarItems } from './resolveArraySidebarItems';
import { resolveAutoSidebarItems } from './resolveAutoSidebarItems';
import { resolveMultiSidebarItems } from './resolveMultiSidebarItems';

const DEFAULT_SIDEBAR_DEPTH = 2;

/**
 * Resolve sidebar items global computed.
 *
 * It should only be resolved and provided once.
 */
export const resolveSidebarItems = (
  frontmatter: DefaultThemeNormalPageFrontmatter,
  themeLocale: DefaultThemeData,
): MyPaResolvedSidebarItem[] => {
  // get sidebar config from frontmatter > theme data
  const sidebarConfig = frontmatter.sidebar ?? themeLocale.sidebar ?? 'auto';
  const sidebarDepth = frontmatter.sidebarDepth ?? themeLocale.sidebarDepth ?? DEFAULT_SIDEBAR_DEPTH;

  // resolve sidebar items according to the config
  if (frontmatter.home || sidebarConfig === false) {
    return [];
  }

  if (sidebarConfig === 'auto') {
    return resolveAutoSidebarItems(sidebarDepth);
  }

  if (isArray(sidebarConfig)) {
    return resolveArraySidebarItems(sidebarConfig, sidebarDepth);
  }

  if (isPlainObject(sidebarConfig)) {
    return resolveMultiSidebarItems(sidebarConfig, sidebarDepth);
  }

  return [];
};
