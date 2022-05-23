import { MyPaNavbarGroup, MyPaNavbarItem, MyPaResolvedNavbarItem } from '@mptheme/config.types';
import { isOfType } from '@mptheme/shared/utils';
import { isString } from '@vuepress/shared';
import { useNavLink } from '@mptheme/client/composables/useNavLink';

export const resolveNavbarItem = (
  item: MyPaNavbarItem | MyPaNavbarGroup | string,
): MyPaResolvedNavbarItem => {
  if (isString(item)) {
    return useNavLink(item);
  }

  if (isOfType<MyPaNavbarGroup>(item, 'children')) {
    return {
      ...item,
      children: item.children.map(resolveNavbarItem),
    };
  }

  return item as MyPaResolvedNavbarItem;
};
