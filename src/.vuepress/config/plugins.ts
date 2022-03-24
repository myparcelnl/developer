import {PluginConfig} from 'vuepress';
import {path} from '@vuepress/utils';

export const plugins: PluginConfig[] = [
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
        ApiLink: path.resolve(__dirname, '..', 'components/ApiLink.vue'),
      },
    },
  ],
];
