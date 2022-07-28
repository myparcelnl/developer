import { ComputedRef, computed } from 'vue';
import { MyPaNavbarGroup, MyPaNavbarItem, MyPaResolvedNavbarItem } from '@mptheme/config.types';
import { isOfType } from '../../../shared/utils/type-guard/isOfType';
import { isString } from '@vuepress/shared';
import { useNavLink } from '@mptheme/client/composables/useNavLink';
import { useSiteLocaleData } from '@mptheme/client/composables';

const resolveNavbarItem = (
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

  return item;
};

export const useNavbarConfig = (): ComputedRef<MyPaResolvedNavbarItem[]> => {
  const themeLocale = useSiteLocaleData();

  return computed(() => {
    // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
    const navbarItems = (themeLocale.value.navbar || []).map(resolveNavbarItem);

    return [
      ...navbarItems,
    ];
  });
};
