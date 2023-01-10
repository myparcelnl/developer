import {defineConfig} from 'vitest/config';
import vitestCommonConfig from './vitest-common.config';

export default defineConfig({
  ...vitestCommonConfig,
  test: {
    ...('test' in vitestCommonConfig ? vitestCommonConfig.test : null),
    include: ['**/*.node.spec.ts'],
  },
});
