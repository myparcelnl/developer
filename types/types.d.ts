/**
 * Types for the VuePress 1 sidebar configuration.
 */
declare interface SidebarItemV1 {
  children?: SidebarItemV1[];
  collapsable?: boolean;
  path?: string;
  sidebarDepth?: number;
  title?: string;
}

declare type SidebarV1ConfigArray = (SidebarItemV1 | string)[];

declare const __VUEPRESS_DEV__: boolean;
declare const __VUEPRESS_SSR__: boolean;
