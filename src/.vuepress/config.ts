import { defineUserConfig, viteBundler } from 'vuepress';
import { createBottomFooter } from './config/createBottomFooter';
import { createFooter } from './config/createFooter';
import { createNavbar } from './config/createNavbar';
import { createSidebar } from './config/sidebar/createSidebar';
import { getSiteLocales } from './config/getSiteLocales';
import { getThemeLocales } from './config/getThemeLocales';
import { head } from './config/head';
import { myParcelTheme } from './theme';
import { slugify } from '@mdit-vue/shared';
import { viteConfig } from './viteConfig';

const DEV_SERVER_PORT = 8955;

export default defineUserConfig({
  head,

  locales: getSiteLocales(),

  theme: myParcelTheme({
    navbar: createNavbar(),
    sidebar: createSidebar(),
    footer: createFooter(),
    footer2: createBottomFooter(),

    locales: getThemeLocales(),

    contributors: true,
    docsBranch: 'main',
    docsDir: '/src/',
    editLink: true,
    logo: 'images/logo.svg',
    repo: 'https://github.com/myparcelnl/developer',
  }),

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
        const hasHeading = (/^\d+(?:\.\w+)+/).exec(str);
        return slugify(hasHeading ? hasHeading[0] : str);
      },
    },
    code: {
      lineNumbers: false,
    },
  },

  port: DEV_SERVER_PORT,

  bundler: viteBundler({
    viteOptions: viteConfig,
  }),
});
