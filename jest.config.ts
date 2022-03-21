import { Config } from '@jest/types';
import { createJestPreset } from 'ts-jest';
import { defaults } from 'jest-config';

const jestConfig = async(): Promise<Config.InitialOptions> => {
  return {
    preset: 'ts-jest',
    ...createJestPreset(true, {}),
    testMatch: ['<rootDir>/src/**/*.node.spec.ts'],
    moduleNameMapper: {
      '^@mptheme/(.+)$': '<rootDir>/src/.vuepress/theme/$1',
    },
    transformIgnorePatterns: [
      '<rootDir>/node_modules/(?!lodash-es|@vuepress|.vite)',
    ],
    extensionsToTreatAsEsm: [...defaults.extensionsToTreatAsEsm, '.ts', '.vue'],
    moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'vue'],

    transform: {
      '\\.[jt]sx?$': 'babel-jest',
    },

    globals: {
      'ts-jest': {
        useESM: true,
      },
    },
  };
};

export default jestConfig;
