import { defineConfig } from 'vitest/config';
import { path } from '@vuepress/utils';
import { viteConfig } from './src/.vuepress/viteConfig';
import vue from '@vitejs/plugin-vue';

const createAlias = (from: string, to: string) => ({
  find: from,
  replacement: path.resolve(__dirname, to),
});

/**
 * Jest would not work with Vite.
 */
export default defineConfig({
  plugins: [
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    vue(),
  ],

  resolve: {
    alias: [
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      ...viteConfig.resolve?.alias ?? [],
      createAlias('@theme', 'node_modules/@vuepress/theme-default/src/client/components'),
      createAlias('@internal', 'src/.vuepress/.temp/internal'),
      createAlias('@mptheme', 'src/.vuepress/theme'),
    ],
  },

  define: {
    __VUEPRESS_DEV__: true,
  },

  test: {
    dir: 'src/.vuepress',
    include: ['**/*.vue.spec.ts'],
    environment: 'happy-dom',
    deps: {
      inline: [
        'lodash-es',
      ],
    },
  },
});
