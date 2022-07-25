import { MyPaResolvedSidebarItem } from '@mptheme/config.types';
import { headersToSidebarItemChildren } from '@mptheme/client/composables';
import { usePageData } from '@vuepress/client';

/**
 * Resolve sidebar items if the config is `auto`.
 */
export const resolveAutoSidebarItems = (
  sidebarDepth: number,
): MyPaResolvedSidebarItem[] => {
  const page = usePageData();

  return [
    {
      text: page.value.title,
      children: headersToSidebarItemChildren(page.value.headers, sidebarDepth),
    },
  ];
};
