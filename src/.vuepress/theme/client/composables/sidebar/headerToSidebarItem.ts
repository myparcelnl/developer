import {type PageHeader} from 'vuepress';
import {type MyPaResolvedSidebarItem} from '@mptheme/config.types';
import {headersToSidebarItemChildren} from './headersToSidebarItemChildren';

/**
 * Util to transform page header to sidebar item.
 */
export const headerToSidebarItem = (header: PageHeader, sidebarDepth: number): MyPaResolvedSidebarItem => ({
  text: header.title,
  link: `#${header.slug}`,
  children: headersToSidebarItemChildren(header.children, sidebarDepth),
});
