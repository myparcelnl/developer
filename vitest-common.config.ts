import {defineConfig} from 'vitest/config';
import {path} from '@vuepress/utils';

export default defineConfig({
  test: {
    globals: true,
    dir: 'src/.vuepress',
    setupFiles: ['test/vitest-setup.ts'],
  },

  resolve: {
    alias: {
      '@theme': path.resolve(__dirname, 'node_modules/@vuepress/theme-default/src/client/components'),
      '@mptheme': path.resolve(__dirname, 'src/.vuepress/theme'),
      '@internal': path.resolve(__dirname, 'src/.vuepress/.temp/internal'),
    },
  },

  define: {
    __VUEPRESS_DEV__: true,
  },
});
