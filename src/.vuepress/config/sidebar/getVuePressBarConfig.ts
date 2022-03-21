import getConfig, { Config } from 'vuepress-bar';

/**
 * Create the vuepress-bar configuration.
 *
 * @param baseDir
 */
export const getVuePressBarConfig = (baseDir: string): Config => {
  return getConfig(baseDir, {
    navPrefix: null,
    maxLevel: 99,
  });
};
