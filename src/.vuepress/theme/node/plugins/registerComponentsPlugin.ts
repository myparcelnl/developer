import { DIR_CLIENT } from '../../shared/directories';
import { PluginOptions } from 'vuepress';
import fs from 'fs';
import path from 'path';

const additionalComponents = {
  HomeLink: '@mptheme/client/views/home/home-link/HomeLink.vue',
  HomePartnerBrand: '@mptheme/client/views/home/home-partner-brand/HomePartnerBrand.vue',
};

/**
 * Register components for use in .md files.
 */
export function registerComponentsPlugin(): PluginOptions {
  const DIR_COMPONENTS = path.resolve(DIR_CLIENT, 'components', 'global');

  const globalComponents = fs
    .readdirSync(DIR_COMPONENTS)
    .reduce((acc, item) => ({
      ...acc,
      [path.basename(item, '.vue')]: DIR_COMPONENTS + '/' + item,
    }), {});

  return [
    '@vuepress/register-components',
    {
      components: {
        ...globalComponents,
        ...additionalComponents,
      },
    },
  ];
}
