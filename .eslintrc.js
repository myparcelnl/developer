module.exports = {
  root: true,
  parserOptions: {
    requireConfigFile: false,
  },
  extends: [
    '@myparcel/eslint-config/preset-es6',
  ],
  rules: {
    'class-methods-use-this': 'off',
    'space-before-blocks': ['error', 'always'],
  },
  overrides: [
    // Vue and related files
    {
      extends: '@myparcel/eslint-config/preset-vue-typescript',
      files: [
        './*.ts',
        './src/.vuepress/**/*',
        '!./src/.vuepress/*.ts',
        '!./src/.vuepress/*.js',
      ],
    },
    // Config files
    {
      files: [
        './*.js',
        './*.ts',
        './src/.vuepress/*.js',
        './src/.vuepress/*.ts',
      ],
      env: {
        node: true,
      },
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },

    // Jest spec files
    {
      files: ['./**/*.spec.ts'],
      extends: '@myparcel/eslint-config/plugin-jest',
    },
  ],
};
