import { MyPaResolvedSidebarItem } from '@mptheme/config.types';
import { PageHeader } from 'vuepress';
import { headerToSidebarItem } from './headerToSidebarItem';

export const headersToSidebarItemChildren = (
  headers: PageHeader[],
  sidebarDepth: number,
): MyPaResolvedSidebarItem[] => {
  return sidebarDepth > 0
    ? headers.map((header) => headerToSidebarItem(header, sidebarDepth - 1))
    : [];
};
