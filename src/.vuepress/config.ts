import {defineUserConfig, viteBundler} from 'vuepress';
import {path} from '@vuepress/utils';
import {docsearchPlugin} from '@vuepress/plugin-docsearch';
import {slugify} from '@mdit-vue/shared';
import {viteConfig} from './viteConfig';
import {myParcelTheme} from './theme';
import {sitemapPlugin} from './plugins/sitemap';
import {parseTranslationsPlugin} from './plugins/parseTranslations';
import {openApiPlugin} from './plugins/openApi';
import {googleTagManagerPlugin} from './plugins/gtm/node';
import {DIR_CONFIG, DIR_VUEPRESS} from './dirs';
import {head} from './config/head';

const DEV_SERVER_PORT = 8955;

export default defineUserConfig({
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
      specsDir: 'src/openapi',
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
      indexName: 'developer-myparcel',
    }),

    sitemapPlugin({
      baseUrl: 'https://developer.myparcel.nl/',
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
    code: {
      lineNumbers: false,
    },
  },

  port: DEV_SERVER_PORT,

  bundler: viteBundler({
    viteOptions: viteConfig,
  }),
});
