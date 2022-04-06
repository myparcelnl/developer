import { AnySidebarItem, ResolvedSidebarItem } from '@mptheme/config.types';
import { RouteLocationNormalizedLoaded } from 'vue-router';
import { findNavItem } from '@mptheme/client/utils/find-nav-item/findNavItem';
import {
  SidebarItemsRef,
  useSidebarItems as realUseSidebarItems,
} from '@vuepress/theme-default/lib/client/composables';
import { toArray } from '@mptheme/client/utils/toArray';
import { ComputedRef } from 'vue';

export const useSidebarItems = (): SidebarItemsRef => {
  return realUseSidebarItems();
};

const getNavItemByRoute = (items: ResolvedSidebarItem[], route: RouteLocationNormalizedLoaded): AnySidebarItem[] => {
  const routeParts = route.fullPath
    .split('/')
    .filter(Boolean);
  const found = findNavItem(items, routeParts.slice(0, 2));

  return found ? toArray(found) : [];
};

export const useFilteredSidebarItems = (): ComputedRef<AnySidebarItem[]> => {
  const items = useSidebarItems();

  return items;
  // const router = useRouter();
  // const filteredItems = ref<AnySidebarItem[]>(getNavItemByRoute(items.value, router.currentRoute.value));
  //
  // router.beforeEach((route) => {
  //   filteredItems.value = getNavItemByRoute(items.value, route);
  // });

  // router.afterEach((a) => {
  //   console.log('afterEach', a.fullPath);
  // });
  //
  // router.beforeResolve((a) => {
  //   console.log('beforeResolve', a.fullPath);
  // });

  // router.beforeEach(() => {
  //   const routeParts = router.currentRoute.value.fullPath
  //     .split('/')
  //     .filter(Boolean);
  //
  //   console.log(router.currentRoute.value);
  //   console.log(routeParts.slice(0, 2));
  //
  //   // filteredItems.value = findNavItem(items.value, routeParts.slice(0, 2));
  // });

  // return computed(() => {
  //   const routeParts = router.currentRoute.value.fullPath
  //     .split('/')
  //     .filter(Boolean);
  //
  //   console.log(router.currentRoute.value);
  //   console.log(routeParts.slice(0, 2));
  //
  //   return findNavItem(items.value, routeParts.slice(0, 2));
  // });

  // return filteredItems;
};
