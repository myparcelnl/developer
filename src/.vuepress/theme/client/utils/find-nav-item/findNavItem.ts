import { AnySidebarItem, SidebarConfigArray, SidebarGroup, SidebarItem } from '@mptheme/config.types';
import { isOfType } from '@mptheme/client/utils/type-guard/isOfType';
import { toArray } from '@mptheme/client/utils/toArray';

export const findNavItem = (
  array: SidebarConfigArray,
  search: string | string[],
): AnySidebarItem | null => {
  const searchKeys = toArray(search);

  let found: AnySidebarItem | undefined;

  if (searchKeys.length > 0) {
    found = array
      .find((item) => {
        if (isOfType<SidebarItem>(item, 'text')) {
          return item.text?.toLowerCase() === searchKeys[0].toLowerCase();
        }

        return item;
      });
  } else {
    found = array[0];
  }

  if (found) {
    if (isOfType<SidebarGroup>(found, 'children')) {
      return searchKeys.length > 1
        ? findNavItem(found.children, searchKeys.splice(1))
        : found;
    }

    return found;
  }

  return null;
};
