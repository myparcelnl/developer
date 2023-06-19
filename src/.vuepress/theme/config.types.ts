import {Breakpoint, Overwrite} from '@mptheme/index.types';
import {DefaultThemeOptions, PageData, SiteData} from 'vuepress';
import {Config} from 'tailwindcss';
import {DefaultThemeNormalPageFrontmatter} from '@vuepress/theme-default/lib/shared';
import {Language} from '../plugins/parseTranslations/shared';
import {NavbarConfig} from '@vuepress/theme-default/lib/shared/nav';

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

export type MyPaNavbarItem = MyPaNavItem | MyPaNavLink;

export type MyPaAnyNavbarItem = MyPaNavbarGroup | MyPaNavbarItem | string;

export type MyPaNavbarGroup = MyPaNavGroup<MyPaAnyNavbarItem>;

export type MyPaNavbarConfigArray = MyPaAnyNavbarItem[];

export type MyPaResolvedNavbarItem = MyPaNavbarItem | MyPaNavGroup<MyPaResolvedNavbarItem>;

export type MyPaSidebarItem = Partial<MyPaNavLink>;

export type MyPaSidebarGroup = MyPaNavLink & MyPaNavGroup<MyPaNavLink>;

export type MyPaSidebarGroupCollapsible = MyPaSidebarGroup & {collapsible?: boolean};

export type MyPaAnySidebarItem = MyPaSidebarItem | MyPaSidebarGroup | MyPaSidebarGroupCollapsible | string;

export type MyPaSidebarConfigArray = MyPaAnySidebarItem[];

export type MyPaSidebarConfigObject = Record<string, Record<string, MyPaSidebarConfigArray>>;

export type MyPaSidebarConfig = MyPaSidebarConfigObject;

export type MyPaResolvedSidebarItem = MyPaSidebarItem &
  Partial<MyPaNavGroup<MyPaResolvedSidebarItem>> & {collapsible?: boolean};

export type TailwindConfig = Overwrite<
  Config,
  {
    theme: {
      screens: Record<Breakpoint, string>;
    };
  }
>;

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

export interface MyPaPageFrontmatter extends DefaultThemeNormalPageFrontmatter {
  /**
   * Set to true if you want the page to automatically show redirect links to languages the same page is available in.
   */
  redirect?: boolean;

  /**
   * Manually define languages to show redirect links for on this page. Put as object to have different urls per
   * language. You must omit the language path prefix.
   *
   * @example // in manual.md
   *   title: Manual
   *   languages:
   *     nl: handleiding.md
   *
   * Renders something along the lines of:
   *   This page is only available in the following languages:
   *   - [Nederlands](/handleiding.md)
   */
  languages?: Record<string, null | string> | OneOrMore<string> | Record<string, string>[];

  sidebar?: 'auto' | false;
}

export interface MyPaThemeData extends Omit<DefaultThemeOptions, 'sidebar' | 'navbar' | 'locales'> {
  locales?: Record<string, Omit<MyPaThemeData, 'locales'>>;
}

export interface MyPaSiteData extends SiteData {
  footer2: NavbarConfig;
  footer: NavbarConfig;
  navbar: NavbarConfig;
  sidebar: MyPaSidebarConfig;
  availableLanguages: ArrayOneOrMore<Language>;
}

export interface MyPaPageData extends PageData {
  hasContent: boolean;
}
