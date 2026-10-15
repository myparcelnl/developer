import {type MyPaResolvedSidebarItem, type SidebarPage} from '@mptheme/config.types';
import {headersToSidebarItemChildren} from './headersToSidebarItemChildren';

/**
 * Resolve sidebar items if the config is `auto`.
 */
export const resolveAutoSidebarItems = (page: SidebarPage, sidebarDepth: number): MyPaResolvedSidebarItem[] => {
  return [
    {
      text: page.title,
      children: headersToSidebarItemChildren(page.headers, sidebarDepth),
    },
  ];
};
