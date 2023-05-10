import {ComputedRef, inject} from 'vue';
import {MyPaResolvedSidebarItem} from '@mptheme/config.types';
import {sidebarItemsSymbol} from './sidebarItemsSymbol';

export type SidebarItemsRef = ComputedRef<MyPaResolvedSidebarItem[]>;

/**
 * Inject sidebar items global computed.
 */
export const useSidebarItems = (): SidebarItemsRef => {
  const sidebarItems = inject(sidebarItemsSymbol);

  if (!sidebarItems) {
    throw new Error('useSidebarItems() is called without provider.');
  }

  return sidebarItems;
};
