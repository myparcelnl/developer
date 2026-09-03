import {type InjectionKey} from 'vue';
import {type SidebarItemsRef} from './useSidebarItems';

export const sidebarItemsSymbol: InjectionKey<SidebarItemsRef> = Symbol('sidebarItems');
