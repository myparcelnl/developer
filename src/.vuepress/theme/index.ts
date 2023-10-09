/* eslint-disable max-lines-per-function */
import {type Page} from 'vuepress';
import markdownItMultimdTable from 'markdown-it-multimd-table';
import {path} from '@vuepress/utils';
import {themeDataPlugin} from '@vuepress/plugin-theme-data';
import {prismjsPlugin} from '@vuepress/plugin-prismjs';
import {palettePlugin} from '@vuepress/plugin-palette';
import {gitPlugin} from '@vuepress/plugin-git';
import {externalLinkIconPlugin} from '@vuepress/plugin-external-link-icon';
import {activeHeaderLinksPlugin} from '@vuepress/plugin-active-header-links';
import {type Theme} from '@vuepress/core';
import {DIR_CLIENT, DIR_THEME} from './shared/directories';
import {seoPlugin} from './seoPlugin';
import {registerCustomComponentsPlugin} from './node/plugins/registerCustomComponentsPlugin';
import {incrementHeadingsPlugin} from './node/plugins/incrementHeadingsPlugin';
import {autoLinkPlugin} from './node/plugins/autoLinkPlugin';
import {createContainerPlugins} from './node/config/createContainerPlugin';
import {createAliasMap} from './node/config/createAliasMap';
import {type MyPaPageFrontmatter, type MyPaThemeData} from './config.types';

/**
 * 1 rem = 16px.
 */
const ONE_REM = 16;

export const myParcelTheme = (options: MyPaThemeData): Theme => {
  return {
    name: '@myparcel/developer-portal',

    templateBuild: path.resolve(__dirname, 'templates', 'build.html'),

    alias: {
      // Replace docsearch css entirely
      '@docsearch/css': path.resolve(DIR_CLIENT, 'styles', 'docsearch.scss'),

      ...createAliasMap(DIR_THEME, '@mptheme'),
    },

    clientConfigFile: path.resolve(DIR_CLIENT, 'clientConfig.ts'),

    extendsPage(page: Page<MyPaPageFrontmatter>) {
      // save relative file path into page data to generate edit link
      page.data.filePathRelative = page.filePathRelative;

      // save title into route meta to generate navbar and sidebar
      page.routeMeta.title = page.title;

      // Save whether there is content on the page to a boolean.
      page.data.hasContent = Boolean(page.contentRendered);
    },

    extendsMarkdown: (md) => {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      md.use(markdownItMultimdTable, {
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
        offset: 3 * ONE_REM + 2 * (1.5 * ONE_REM) + 1,
      }),
      externalLinkIconPlugin({}),
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
