import {isPlainObject} from 'vuepress/shared';
import {isArray} from 'lodash-unified';
import {
  type MyPaPageFrontmatter,
  type MyPaResolvedSidebarItem,
  type MyPaSiteData,
  type MyPaThemeData,
  type SidebarPage,
} from '@mptheme/config.types';
import {resolveMultiSidebarItems} from './resolveMultiSidebarItems';
import {resolveAutoSidebarItems} from './resolveAutoSidebarItems';
import {resolveArraySidebarItems} from './resolveArraySidebarItems';

const DEFAULT_SIDEBAR_DEPTH = 2;

/**
 * Resolve sidebar items global computed.
 *
 * It should only be resolved and provided once.
 */
export const resolveSidebarItems = (
  frontmatter: MyPaPageFrontmatter,
  siteData: MyPaSiteData,
  themeData: MyPaThemeData,
  page: SidebarPage,
): MyPaResolvedSidebarItem[] => {
  const sidebarConfig = frontmatter.sidebar ?? siteData.sidebar ?? 'auto';

  const sidebarDepth = frontmatter.sidebarDepth ?? themeData.sidebarDepth ?? DEFAULT_SIDEBAR_DEPTH;

  if (frontmatter.home || sidebarConfig === false) {
    return [];
  }

  if (sidebarConfig === 'auto') {
    return resolveAutoSidebarItems(page, sidebarDepth);
  }

  if (isArray(sidebarConfig)) {
    return resolveArraySidebarItems(sidebarConfig, sidebarDepth, page);
  }

  if (isPlainObject(sidebarConfig)) {
    return resolveMultiSidebarItems(siteData, sidebarConfig, sidebarDepth, page);
  }

  return [];
};
