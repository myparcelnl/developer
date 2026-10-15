import {path} from 'vuepress/utils';
import {defineUserConfig} from 'vuepress';
import {sitemapPlugin} from '@vuepress/plugin-sitemap';
import {seoPlugin} from '@vuepress/plugin-seo';
import {googleTagManagerPlugin} from '@vuepress/plugin-google-tag-manager';
import {docsearchPlugin} from '@vuepress/plugin-docsearch';
import {viteBundler} from '@vuepress/bundler-vite';
import {slugify} from '@mdit-vue/shared';
import {viteConfig} from './viteConfig';
import {myParcelTheme} from './theme';
import {parseTranslationsPlugin} from './plugins/parseTranslations';
import {openApiPlugin} from './plugins/openApi';
import {DIR_CONFIG, DIR_VUEPRESS} from './dirs';
import {head} from './config/head';

const DEV_SERVER_PORT = 8955;

const HOSTNAME = 'https://developer.myparcel.nl';

export default defineUserConfig({
  description: 'Find our API reference, documentation and plugin guides on the MyParcel Developer Portal',

  head,

  theme: myParcelTheme({
    contributors: true,
    docsBranch: 'main',
    docsDir: '/src/',
    editLink: true,
    logo: 'images/logo.svg',
    repo: 'https://github.com/myparcelnl/developer',
  }),

  plugins: [
    openApiPlugin({
      yamlUrls: [],
    }),

    parseTranslationsPlugin({
      defaultLocale: 'en-GB',
      configDir: path.resolve(DIR_CONFIG, 'navigation'),
      dest: path.resolve(DIR_VUEPRESS, 'public', 'translations'),
    }),

    googleTagManagerPlugin({
      id: 'GTM-P3ZWX56',
    }),

    docsearchPlugin({
      appId: 'CN8B8S1EFL',
      apiKey: '4c55bbf8ccfb57cb5c3132c03fc9728b',
      indices: ['developer-myparcel'],
      injectStyles: false,
    }),

    seoPlugin({
      hostname: HOSTNAME,
    }),

    sitemapPlugin({
      hostname: HOSTNAME,
    }),
  ],

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
        const hasHeading = /^\d+(?:\.\w+)+/.exec(str);
        return slugify(hasHeading ? hasHeading[0] : str);
      },
    },
  },

  port: DEV_SERVER_PORT,

  bundler: viteBundler({
    viteOptions: viteConfig,
  }),
});
