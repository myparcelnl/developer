import { createBottomFooter } from './config/createBottomFooter';
import { createFooter } from './config/createFooter';
import { createNavbar } from './config/createNavbar';
import { createSidebar } from './config/sidebar/createSidebar';
import { defineUserConfig } from 'vuepress';
import { getLocales } from './getLocales';
import { head } from './config/head';
import path from 'path';
import { slugify } from '@vuepress/markdown';
import { viteConfig } from './viteConfig';

const DEV_SERVER_PORT = 8955;

export default defineUserConfig({
  head,

  locales: getLocales(),

  theme: path.resolve(__dirname, 'theme'),

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
    repo: 'https://github.com/myparcelnl/developer',

    navbar: createNavbar(),
    sidebar: createSidebar(),
    footer: createFooter(),
    footer2: createBottomFooter(),

    themePlugins: {
      activeHeaderLinks: false,
      container: {
        tip: false,
        danger: false,
        details: true,
        warning: false,
      },
    },
  },

  // theme: myParcelTheme({
  //   navbar: createNavbar(),
  //   sidebar: createSidebar(),
  //   footer: createFooter(),
  //   footer2: createBottomFooter(),
  //
  //   defaultTheme: {
  //     contributors: true,
  //     docsBranch: 'main',
  //     docsDir: '/src/',
  //     editLink: true,
  //     logo: 'images/logo.svg',
  //     logoDark: 'images/logo_dark.svg',
  //     repo: 'https://github.com/myparcelnl/developer',
  //
  //     themePlugins: {
  //       activeHeaderLinks: true,
  //       container: {
  //         tip: false,
  //         danger: false,
  //         details: true,
  //         warning: false,
  //       },
  //     },
  //   },
  // }),

  markdown: {
    anchor: {
      /**
       * Modifies how anchor tags are created. If there's an #.X(.X)* marker in the title, use that as anchor without
       * the rest of the heading text, for easier linking.
       *
       * @param {string} str
       * @returns {string}
       */
      slugify(str: string): string {
        const hasHeading = (/^\d+(?:\.[\w\d]+)+/).exec(str);
        return slugify(hasHeading ? hasHeading[0] : str);
      },
    },
    code: {
      lineNumbers: false,
    },
  },

  port: DEV_SERVER_PORT,

  bundlerConfig: {
    viteOptions: viteConfig,
  },
  // bundler: viteBundler({
  //   viteOptions: viteConfig,
  // }),
});
