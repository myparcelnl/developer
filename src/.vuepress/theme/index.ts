/* eslint-disable max-lines-per-function */
import { DIR_CLIENT, DIR_THEME } from './shared/directories';
import { Theme } from 'vuepress';
import { ThemeConfig } from '@mptheme/config.types';
import { createAliasMap } from './node/config/createAliasMap';
import { createContainerPlugins } from './node/config/createContainerPlugin';
import { defaultTheme } from '@vuepress/theme-default';
import { path } from '@vuepress/utils';
import plugin from './node/plugin';

const components = path.resolve(DIR_CLIENT, 'components');
const views = path.resolve(DIR_CLIENT, 'views');

const theme: Theme<ThemeConfig> = (config, app) => {
  const defaultThemeData = typeof defaultTheme === 'function' ? defaultTheme(config, app) : null;

  return {
    ...defaultThemeData,

    name: '@myparcel/developer-portal',

    alias: {
      ...defaultThemeData?.alias,

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

      ...createAliasMap(DIR_THEME, '@mptheme'),
    },

    clientAppEnhanceFiles: path.resolve(DIR_CLIENT, 'clientAppEnhance.ts'),
    clientAppSetupFiles: path.resolve(DIR_CLIENT, 'clientAppSetup.ts'),

    /**
     * @see https://v2.vuepress.vuejs.org/guide/plugin.html#community-plugin
     */
    plugins: [
      ...defaultThemeData?.plugins ?? [],

      plugin,
      ...createContainerPlugins(),

      [
        '@vuepress/docsearch',
        {
          apiKey: 'a54eaf74e6cdcbc9f373bb3c60786b2b',
          indexName: 'myparcelnl',
          locales: {
            '/': {
              placeholder: 'Search',
            },
          },
        },
      ],

      // Register components for use in .md files.
      [
        '@vuepress/register-components',
        {
          components: {
            ApiLink: path.resolve(DIR_CLIENT, 'components/global/ApiLink.vue'),
          },
        },
      ],
    ],
  };
};

export default theme;
