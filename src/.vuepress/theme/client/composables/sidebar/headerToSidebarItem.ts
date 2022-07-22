import { MyPaResolvedSidebarItem } from '@mptheme/config.types';
import { PageHeader } from 'vuepress';
import { headersToSidebarItemChildren } from '@mptheme/client/composables';

/**
 * Util to transform page header to sidebar item.
 */
export const headerToSidebarItem = (
  header: PageHeader,
  sidebarDepth: number,
): MyPaResolvedSidebarItem => ({
  text: header.title,
  link: `#${header.slug}`,
  children: headersToSidebarItemChildren(header.children, sidebarDepth),
});
