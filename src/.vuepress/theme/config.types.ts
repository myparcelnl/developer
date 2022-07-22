import { Breakpoint, Overwrite } from '@mptheme/index.types';
import { Config } from 'tailwindcss';
import { DefaultThemeOptions } from 'vuepress';
import { LocaleConfig } from '@vuepress/shared';
import { NavbarConfig } from '@vuepress/theme-default/lib/shared/nav';

export interface MyPaNavItem {
  text: string;
  ariaLabel?: string;
  sub?: boolean;
}

export interface MyPaNavLink extends MyPaNavItem {
  link: string;
  rel?: string;
  target?: string;
  activeMatch?: string;
}

export interface MyPaNavGroup<T> extends MyPaNavItem {
  children: T[];
}

export type MyPaNavbarItem = MyPaNavLink;
export type MyPaAnyNavbarItem = MyPaNavbarGroup | MyPaNavbarItem | string;
export type MyPaNavbarGroup = MyPaNavGroup<MyPaAnyNavbarItem>;
export type MyPaNavbarConfigArray = MyPaAnyNavbarItem[];
export type MyPaResolvedNavbarItem = MyPaNavbarItem | MyPaNavGroup<MyPaResolvedNavbarItem>;

export type MyPaSidebarItem = Partial<MyPaNavLink>;
export type MyPaSidebarGroup = MyPaSidebarItem & MyPaNavGroup<MyPaSidebarItem | MyPaSidebarGroup | string>;
export type MyPaSidebarGroupCollapsible = MyPaSidebarGroup & { collapsible?: boolean };
export type MyPaAnySidebarItem = MyPaSidebarItem | MyPaSidebarGroup | MyPaSidebarGroupCollapsible | string;

export type MyPaSidebarConfigArray = MyPaAnySidebarItem[];
export type MyPaSidebarConfigObject = Record<string, MyPaSidebarConfigArray>;
export type MyPaSidebarConfig = MyPaSidebarConfigArray | MyPaSidebarConfigObject;
export type MyPaResolvedSidebarItem =
  MyPaSidebarItem
  & Partial<MyPaNavGroup<MyPaResolvedSidebarItem>>
  & { collapsible?: boolean };

export type TailwindConfig = Overwrite<Config, {
  theme: {
    screens: Record<Breakpoint, string>;
  };
}>;

export interface MyPaHomepageFrontmatter {
  title?: string;
  subtitle?: string;
  actions?: {
    title: string;
    link: string;
    variant: string;
  }[];
  tree: {
    title?: string;
    subtitle?: string;
    render?: {
      attributes?: Record<string, never>;
      children: {
        component: string;
        attributes?: Record<string, never>;
      }[];
    };
  }[];
}

export interface MyParcelThemeOptions extends Omit<DefaultThemeOptions, 'sidebar' | 'navbar' | 'locales'> {
  footer2: NavbarConfig;
  footer: NavbarConfig;
  navbar: NavbarConfig;
  sidebar: MyPaSidebarConfig;
  locales: LocaleConfig<MyParcelThemeOptions>;
}
