import { Config } from '@jest/types';
import { createJestPreset } from 'ts-jest';
import { defaults } from 'jest-config';

const common: Config.InitialOptions = {
  moduleNameMapper: {
    '^@mptheme/(.+)$': '<rootDir>/src/.vuepress/theme/$1',
  },
  transformIgnorePatterns: [
    '<rootDir>/node_modules/(?!lodash-es|@vuepress|.vite)',
  ],
  extensionsToTreatAsEsm: [...defaults.extensionsToTreatAsEsm, '.ts', '.vue'],
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'vue'],
};

const jestConfig = async(): Promise<Config.InitialOptions> => {
  return {
    // reporters: [
    //   'default',
    //   'vite-jest',
    // ],
    projects: [
      {
        displayName: 'vue',
        testMatch: ['<rootDir>/src/**/*.vue.spec.ts'],
        // @ts-ignore
        // ...await import('vite-jest/jest-preset'),
        ...common,
        testEnvironment: 'jest-environment-jsdom',

        transform: {
          '^.+\\.vue$': 'vite-jest',
          '^.+\\.tsx?$': 'ts-jest',
          // '^.+\\.[jt]sx?$': 'vite-jest',
        },
      },
      {
        ...createJestPreset(true, {}),
        displayName: 'node',
        testMatch: ['<rootDir>/src/**/*.node.spec.ts'],
        ...common,

        transform: {
          '\\.[jt]sx?$': 'babel-jest',
        },

        globals: {
          'ts-jest': {
            useESM: true,
          },
        },
      },
    ],
  };
};

export default jestConfig;
