import { DIR_CLIENT, DIR_THEME } from './shared/directories';
import { Theme } from 'vuepress';
import { ThemeConfig } from '@mptheme/config.types';
import { createAliasMap } from './node/config/createAliasMap';
import { path } from '@vuepress/utils';
import { plugins } from './node/config/plugins';

const components = path.resolve(DIR_CLIENT, 'components');
const views = path.resolve(DIR_CLIENT, 'views');

const theme: Theme<ThemeConfig> = {
  name: '@myparcel/developer-portal',
  extends: '@vuepress/theme-default',

  /* eslint-disable @typescript-eslint/naming-convention */
  alias: {
    '@theme/SidebarItem.vue': `${components}/sidebar-item/SidebarItem.vue`,
    '@theme/AutoLink.vue': `${components}/auto-link/AutoLink.vue`,
    '@theme/Home.vue': `${views}/home/home/MyPaHome.vue`,
    '@theme/HomeContent.vue': `${views}/home/home-content/HomeContent.vue`,
    '@theme/HomeFooter.vue': `${views}/home/home-footer/HomeFooter.vue`,
    '@theme/HomeHero.vue': `${views}/home/home-hero/HomeHero.vue`,
    '@theme/Navbar.vue': `${views}/layout/header/MyPaHeader.vue`,
    '@theme/NavbarBrand.vue': `${views}/layout/navbar-brand/NavbarBrand.vue`,
    '@theme/Page.vue': `${views}/page/page/MyPaPage.vue`,
    '@theme/PageMeta.vue': `${views}/page/page-meta/PageMeta.vue`,
    '@theme/PageNav.vue': `${views}/page/page-nav/PageNav.vue`,
    '@theme/Sidebar.vue': `${views}/layout/sidebar/MyPaSidebar.vue`,
    '@theme/SidebarItems.vue': `${views}/layout/sidebar-items/SidebarItems.vue`,
    '@theme/ToggleSidebarButton.vue': `${views}/layout/toggle-sidebar-button/ToggleSidebarButton.vue`,

    // Replace docsearch css entirely
    '@docsearch/css': path.resolve(DIR_CLIENT, 'styles', 'docsearch.scss'),

    ...createAliasMap(components, '@Components'),
    ...createAliasMap(DIR_THEME, '@mptheme'),
  },
  /* eslint-enable @typescript-eslint/naming-convention */

  clientAppEnhanceFiles: path.resolve(DIR_CLIENT, 'clientAppEnhance.ts'),
  clientAppSetupFiles: path.resolve(DIR_CLIENT, 'clientAppSetup.ts'),

  /**
   * @see https://v2.vuepress.vuejs.org/guide/plugin.html#community-plugin
   */
  plugins,
};

export default theme;
