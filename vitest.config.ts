import { defineConfig } from 'vitest/config';
import { path } from '@vuepress/utils';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  define: {
    __VUEPRESS_DEV__: true,
  },

  plugins: [
    vue(),
  ],

  resolve: {
    alias: {
      '@theme': path.resolve(__dirname, 'node_modules/@vuepress/theme-default/src/client/components'),
      '@mptheme': path.resolve(__dirname, 'src/.vuepress/theme'),
      '@internal': path.resolve(__dirname, 'src/.vuepress/.temp/internal'),
    },
  },

  test: {
    globals: true,
    dir: 'src/.vuepress',
    setupFiles: ['test/vitest-setup.ts'],
    environment: 'happy-dom',
  },
});
