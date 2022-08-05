import type { Plugin, PluginObject } from '@vuepress/core';
import { logger, path } from '@vuepress/utils';
import type { GoogleTagManagerPluginOptions } from '../shared';

export const googleTagManagerPlugin = (options: GoogleTagManagerPluginOptions): Plugin => (app) => {
  const plugin: PluginObject = {
    name: '@myparcel/vuepress-google-tag-manager',
  };

  if (!options.id) {
    logger.warn(`[${plugin.name}] 'id' is required`);
    return plugin;
  }

  if (app.env.isDev) {
    return plugin;
  }

  return {
    ...plugin,

    clientConfigFile: path.resolve(__dirname, '../client/config.ts'),

    define: {
      __GTM_OPTIONS__: options,
    },
  };
};
