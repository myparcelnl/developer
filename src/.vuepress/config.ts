import { ThemeConfig } from '@mptheme/config.types';
import { createBottomFooter } from './config/createBottomFooter';
import { createFooter } from './config/createFooter';
import { createNavbar } from './config/createNavbar';
import { createSidebar } from './config/sidebar/createSidebar';
import { defineUserConfig } from 'vuepress';
import { head } from './config/head';
import { path } from '@vuepress/utils';
import { viteConfig } from './viteConfig';

export default defineUserConfig<ThemeConfig>({
  theme: path.resolve(__dirname, 'theme'),

  title: 'MyParcel Developer Portal',
  description: 'Connect with our API and get started with shipments, returns and more.',

  head,

  /**
   * @see https://v2.vuepress.vuejs.org/reference/default-theme/config.html
   */
  themeConfig: {
    contributors: true,
    docsBranch: 'main',
    docsDir: '/src/',
    editLink: true,
    logo: 'images/logo.svg',
    logoDark: 'images/logo_dark.svg',
    repo: 'https://github.com/myparcelnl/developer-portal',
    navbar: createNavbar(),
    footer: createFooter(),
    footer2: createBottomFooter(),
    themePlugins: [],
    sidebar: createSidebar(),
  },

  port: 8955,

  bundlerConfig: {
    viteOptions: viteConfig,
  },
});
