import {type RouteLocationNormalized} from 'vue-router';
import {type MyPaSidebarItem} from '../../config.types';

export const isActiveSidebarItem = (item: MyPaSidebarItem, route: RouteLocationNormalized): boolean => {
  const {link} = item;

  return route.hash === link || route.path === link;
};
