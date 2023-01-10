import {InjectionKey} from 'vue';
import {SidebarItemsRef} from './useSidebarItems';

export const sidebarItemsSymbol: InjectionKey<SidebarItemsRef> = Symbol('sidebarItems');
