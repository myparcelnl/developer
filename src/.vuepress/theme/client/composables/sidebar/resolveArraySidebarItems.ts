import { MyPaResolvedSidebarItem, MyPaSidebarConfigArray, MyPaSidebarItem } from '@mptheme/config.types';
import { headersToSidebarItemChildren } from '@mptheme/client/composables';
import { isString } from '@vuepress/shared';
import { useNavLink } from '@mptheme/client/composables/useNavLink';
import { usePageData } from '@vuepress/client';
import { useRoute } from 'vue-router';

/**
 * Resolve sidebar items if the config is an array.
 */
export const resolveArraySidebarItems = (
  sidebarConfig: MyPaSidebarConfigArray,
  sidebarDepth: number,
): MyPaResolvedSidebarItem[] => {
  const route = useRoute();
  const page = usePageData();

  const handleChildItem = (
    item: MyPaResolvedSidebarItem | MyPaSidebarItem | string,
  ): MyPaResolvedSidebarItem => {
    let childItem: MyPaResolvedSidebarItem;

    if (isString(item)) {
      childItem = useNavLink(item);
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
    if (childItem.link === route.path) {
      // skip h1 header
      const headers = page.value.headers[0]?.level === 1
        ? page.value.headers[0].children
        : page.value.headers;

      return {
        ...childItem,
        children: headersToSidebarItemChildren(headers, sidebarDepth),
      };
    }

    return childItem;
  };

  return sidebarConfig.map((item) => handleChildItem(item));
};
