import {isString} from 'vuepress/shared';
import {
  type MyPaResolvedSidebarItem,
  type MyPaSidebarConfigArray,
  type MyPaSidebarItem,
  type SidebarPage,
} from '@mptheme/config.types';
import {useNavLink} from '@mptheme/client/composables/useNavLink';
import {headersToSidebarItemChildren} from './headersToSidebarItemChildren';

/**
 * Resolve sidebar items if the config is an array.
 */
export const resolveArraySidebarItems = (
  sidebarConfig: MyPaSidebarConfigArray,
  sidebarDepth: number,
  page: SidebarPage,
): MyPaResolvedSidebarItem[] => {
  const handleChildItem = (item: MyPaResolvedSidebarItem | MyPaSidebarItem | string): MyPaResolvedSidebarItem => {
    let childItem: MyPaResolvedSidebarItem;

    if (isString(item)) {
      childItem = useNavLink(item, page.routePath);
    } else {
      childItem = item as MyPaResolvedSidebarItem;
    }

    if (childItem.children) {
      return {
        ...childItem,
        children: childItem.children.map((item) => handleChildItem(item)),
      };
    }

    // if the sidebar item is current page and children is not set
    // use headers of current page as children
    if (childItem.link === page.routePath) {
      return {
        ...childItem,
        children: headersToSidebarItemChildren(page.headers, sidebarDepth),
      };
    }

    return childItem;
  };

  return sidebarConfig.map((item) => handleChildItem(item));
};
