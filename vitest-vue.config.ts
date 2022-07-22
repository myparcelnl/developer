import { defineConfig } from 'vitest/config';
import vitestCommonConfig from './vitest-common.config';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  ...vitestCommonConfig,
  plugins: [
    vue(),
  ],

  test: {
    ...'test' in vitestCommonConfig ? vitestCommonConfig.test : null,
    include: ['**/*.vue.spec.ts'],
    environment: 'happy-dom',
  },
});
