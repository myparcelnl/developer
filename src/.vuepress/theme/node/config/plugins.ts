/* eslint-disable @typescript-eslint/naming-convention */
import { DIR_CLIENT, DIR_NODE } from '../../shared/directories';
import { PluginConfig } from 'vuepress';
import { path } from '@vuepress/utils';

export const plugins: PluginConfig[] = [
  path.resolve(DIR_NODE, 'plugin'),

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
];
