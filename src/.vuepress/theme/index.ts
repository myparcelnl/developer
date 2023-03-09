/* eslint-disable max-lines-per-function */
import { DIR_CLIENT, DIR_THEME } from './shared/directories';
import { MyPaPageFrontmatter, MyPaThemeData } from './config.types';
import { Page } from 'vuepress';
import { Theme } from '@vuepress/core';
import { activeHeaderLinksPlugin } from '@vuepress/plugin-active-header-links';
import { autoLinkPlugin } from './node/plugins/autoLinkPlugin';
import { createAliasMap } from './node/config/createAliasMap';
import { createContainerPlugins } from './node/config/createContainerPlugin';
import { externalLinkIconPlugin } from '@vuepress/plugin-external-link-icon';
import { gitPlugin } from '@vuepress/plugin-git';
import { incrementHeadingsPlugin } from './node/plugins/incrementHeadingsPlugin';
import { palettePlugin } from '@vuepress/plugin-palette';
import { path } from '@vuepress/utils';
import { prismjsPlugin } from '@vuepress/plugin-prismjs';
import { registerCustomComponentsPlugin } from './node/plugins/registerCustomComponentsPlugin';
import { seoPlugin } from './seoPlugin';
import { themeDataPlugin } from '@vuepress/plugin-theme-data';

const views = path.resolve(DIR_CLIENT, 'views');

/**
 * 1 rem = 16px.
 */
const ONE_REM = 16;

export const myParcelTheme = (options: MyPaThemeData): Theme => {
  return {
    name: '@myparcel/developer-portal',

    templateBuild: path.resolve(__dirname, 'templates', 'build.html'),

    layouts: {
      Layout: `${views}/layout/layout/Layout.vue`,
      // eslint-disable-next-line @typescript-eslint/no-magic-numbers
      404: `${views}/404Page/404Page.vue`,
    },

    alias: {
      // Replace docsearch css entirely
      '@docsearch/css': path.resolve(DIR_CLIENT, 'styles', 'docsearch.scss'),

      ...createAliasMap(DIR_THEME, '@mptheme'),
    },

    clientConfigFile: path.resolve(DIR_CLIENT, 'clientConfig.ts'),

    extendsPage: (page: Page<MyPaPageFrontmatter>) => {
      // save relative file path into page data to generate edit link
      page.data.filePathRelative = page.filePathRelative;

      // save title into route meta to generate navbar and sidebar
      page.routeMeta.title = page.title;

      // Save whether there is content on the page to a boolean.
      page.data.hasContent = Boolean(page.contentRendered);
    },

    extendsMarkdown: (md) => {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      md.use(require('markdown-it-multimd-table'), {
        multiline: true,
        rowspan: true,
        headerless: true,
      });
    },

    /**
     * @see https://v2.vuepress.vuejs.org/guide/plugin.html#community-plugin
     */
    plugins: [
      ...createContainerPlugins(),
      activeHeaderLinksPlugin({
        headerLinkSelector: 'a.sidebar-item',
        headerAnchorSelector: '.header-anchor',
        // Header height in pixels. It's 3rem content + (2 * 1.5rem padding) + 1px border
        // eslint-disable-next-line @typescript-eslint/no-magic-numbers,@typescript-eslint/no-extra-parens
        offset: (3 * ONE_REM) + (2 * (1.5 * ONE_REM)) + 1,
      }),
      externalLinkIconPlugin({ }),
      themeDataPlugin({
        themeData: options,
      }),
      prismjsPlugin(),
      palettePlugin({}),
      autoLinkPlugin(),
      gitPlugin(),
      incrementHeadingsPlugin(),
      registerCustomComponentsPlugin(),
      seoPlugin(),
    ],
  };
};
