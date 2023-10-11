import fs from 'fs';
import {type Plugin} from 'vuepress';
import {path} from '@vuepress/utils';
import {registerComponentsPlugin} from '@vuepress/plugin-register-components';
import {DIR_CLIENT} from '../../shared/directories';

const additionalComponents = {
  HomeLink: '@mptheme/client/views/home/home-link/HomeLink.vue',
  HomePartnerBrand: '@mptheme/client/views/home/home-partner-brand/HomePartnerBrand.vue',
};

/**
 * Register components for use in .md files.
 */
export const registerCustomComponentsPlugin = (): Plugin => {
  const DIR_COMPONENTS = path.resolve(DIR_CLIENT, 'components', 'global');

  const globalComponents = fs.readdirSync(DIR_COMPONENTS).reduce((acc, item) => {
    const componentName = item.replace(/\.(?:vue|ts)/, '');

    return {
      ...acc,
      [componentName]: `${DIR_COMPONENTS}/${item}`,
    };
  }, {});

  return registerComponentsPlugin({
    componentsDir: DIR_COMPONENTS,
    components: {
      ...globalComponents,
      ...additionalComponents,
    },
  });
};
