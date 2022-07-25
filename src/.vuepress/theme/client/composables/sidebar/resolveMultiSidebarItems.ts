import { MyPaResolvedSidebarItem, MyPaSidebarConfigObject } from '@mptheme/config.types';
import { resolveArraySidebarItems } from './resolveArraySidebarItems';
import { resolveLocalePath } from '@vuepress/shared';
import { useRoute } from 'vue-router';

/**
 * Resolve sidebar items if the config is a key -> value (path-prefix -> array) object.
 */
export const resolveMultiSidebarItems = (
  sidebarConfig: MyPaSidebarConfigObject,
  sidebarDepth: number,
): MyPaResolvedSidebarItem[] => {
  const route = useRoute();
  const sidebarPath = resolveLocalePath(sidebarConfig, route.path);
  const matchedSidebarConfig = sidebarConfig[sidebarPath] ?? [];

  return resolveArraySidebarItems(matchedSidebarConfig, sidebarDepth);
};
