import {type PageHeader} from 'vuepress';
import {type MyPaResolvedSidebarItem} from '@mptheme/config.types';
import {headerToSidebarItem} from './headerToSidebarItem';

export const headersToSidebarItemChildren = (
  headers: PageHeader[],
  sidebarDepth: number,
): MyPaResolvedSidebarItem[] => {
  return sidebarDepth > 0 ? headers.map((header) => headerToSidebarItem(header, sidebarDepth - 1)) : [];
};
