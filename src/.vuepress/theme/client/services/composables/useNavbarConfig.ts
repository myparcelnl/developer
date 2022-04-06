import { computed, ComputedRef } from 'vue';
import { NavbarGroup, NavbarItem, ResolvedNavbarItem } from '@vuepress/theme-default/lib/shared';
import { useNavLink, useThemeLocaleData } from '@vuepress/theme-default/lib/client/composables';
import { isOfType } from '@mptheme/client/utils/type-guard/isOfType';
import { isString } from '@vuepress/shared';

const resolveNavbarItem = (
  item: NavbarItem | NavbarGroup | string,
): ResolvedNavbarItem => {
  if (isString(item)) {
    return useNavLink(item);
  }

  if (isOfType<NavbarGroup>(item, 'children')) {
    return {
      ...item,
      children: item.children.map(resolveNavbarItem),
    };
  }

  return item as ResolvedNavbarItem;
};

export const useNavbarConfig = (): ComputedRef<ResolvedNavbarItem[]> => {
  const themeLocale = useThemeLocaleData();

  return computed(() => (themeLocale.value.navbar || []).map(resolveNavbarItem));
};
