import { MyPaAnySidebarItem, MyPaSidebarConfigArray, MyPaSidebarGroup, MyPaSidebarItem } from '@mptheme/config.types';
import { isOfType } from '@mptheme/shared/utils';
import { toArray } from '@mptheme/client/utils/toArray';

export const findNavItem = (
  array: MyPaSidebarConfigArray,
  search: string | string[],
): MyPaAnySidebarItem | null => {
  const searchKeys = toArray(search);

  let found: MyPaAnySidebarItem | undefined;

  if (searchKeys.length > 0) {
    found = array
      .find((item) => {
        if (isOfType<MyPaSidebarItem>(item, 'text')) {
          return item.text?.toLowerCase() === searchKeys[0].toLowerCase();
        }

        return item;
      });
  } else {
    found = array[0];
  }

  if (found) {
    if (isOfType<MyPaSidebarGroup>(found, 'children')) {
      return searchKeys.length > 1
        ? findNavItem(found.children, searchKeys.splice(1))
        : found;
    }

    return found;
  }

  return null;
};
