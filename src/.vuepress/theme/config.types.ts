import { Breakpoint, Overwrite } from '@mptheme/index.types';
import { DefaultThemeOptions } from 'vuepress';
import { TailwindConfig as OriginalTailwindConfig } from 'tailwindcss/tailwind-config';

export interface NavItem {
  text: string;
  ariaLabel?: string;
  sub?: boolean;
}

export interface NavLink extends NavItem {
  link: string;
  rel?: string;
  target?: string;
  activeMatch?: string;
}

export interface NavGroup<T> extends NavItem {
  children: T[];
}

export type NavbarItem = NavLink;
export type AnyNavbarItem = NavbarGroup | NavbarItem | string;
export type NavbarGroup = NavGroup<AnyNavbarItem>;
export type NavbarConfigArray = AnyNavbarItem[];
export type ResolvedNavbarItem = NavbarItem | NavGroup<ResolvedNavbarItem>;

export type SidebarItem = Partial<NavLink>;
export type SidebarGroup = SidebarItem & NavGroup<SidebarItem | SidebarGroup | string>;
export type SidebarGroupCollapsible = SidebarGroup & { collapsible?: boolean; };
export type AnySidebarItem = SidebarItem | SidebarGroup | SidebarGroupCollapsible | string

export type SidebarConfigArray = AnySidebarItem[];
export type SidebarConfigObject = Record<string, SidebarConfigArray>;
export type SidebarConfig = SidebarConfigArray | SidebarConfigObject;
export type ResolvedSidebarItem = SidebarItem & Partial<NavGroup<ResolvedSidebarItem>> & { collapsible?: boolean; };

export type TailwindConfig = Overwrite<OriginalTailwindConfig, {
  theme: {
    screens: Record<Breakpoint, string>
  }
}>

export interface ThemeConfig extends Omit<DefaultThemeOptions, 'navbar'> {
  navbar: NavbarConfigArray;
  footer: NavbarConfigArray;
  footer2: NavLink[];
  tailwindConfig: TailwindConfig;
}

export interface MyPaHomepageFrontmatter {
  title?: string;
  subtitle?: string;
  actions?: {
    title: string;
    link: string;
    variant: string;
  }[],
  tree: {
    title?: string;
    subtitle?: string;
    render?: {
      attributes?: Record<string, never>;
      children: {
        component: string;
        attributes?: Record<string, never>;
      }[]
    }
  }[];
}
