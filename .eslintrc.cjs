const path = require('path');

module.exports = {
  root: true,
  extends: '@myparcel/eslint-config/preset-typescript',
  parserOptions:{
    project: path.resolve(__dirname, 'tsconfig.json'),
  },
  rules: {
    '@typescript-eslint/require-await': 'off',
    'class-methods-use-this': 'off',
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'if' },
      { blankLine: 'always', prev: 'if', next: '*' },
      { blankLine: 'never', prev: 'const', next: 'const' },
      { blankLine: 'always', prev: 'const', next: 'multiline-const' },
      { blankLine: 'always', prev: 'multiline-const', next: 'multiline-const' },
    ],
    'space-before-blocks': ['error', 'always'],
  },
  overrides: [
    // Vue and related files
    {
      extends: [
        '@myparcel/eslint-config/preset-vue3-typescript',
        'plugin:vue/vue3-recommended',
        '@vue/eslint-config-typescript',
      ],
      files: [
        '!./src/.vuepress/**/*.spec.*',
        '!./src/.vuepress/*.js',
        '!./src/.vuepress/*.ts',
        './src/.vuepress/**/*',
      ],
      rules: {
        'vue/multi-word-component-names': 'off',
        'vue/no-unregistered-components': 'off',
        'vue/no-undef-components': [
          'error',
          {
            ignorePatterns: [
              'AutoLink',
              'Badge',
              'CodeGroup',
              'CodeGroupItem',
              'Content',
              'ExternalLinkIcon',
              'HomeLink',
              'NavbarSearch',
              'RouterLink',
              'RouterView',
              'Transition',
              'TransitionGroup',
            ],
          },
        ],
        'vue/no-bare-strings-in-template': 'off',

        '@typescript-eslint/restrict-plus-operands': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',

        // These rules are extremely slow
        '@typescript-eslint/no-misused-promises': 'off',
        '@typescript-eslint/promise-function-async': 'off',
      },
    },

    {
      // Config files and test specs
      files: [
        './*.cjs',
        './*.mjs',
        './*.ts',
        './src/.vuepress/**/*.spec.*',
        './src/.vuepress/*.mjs',
        './src/.vuepress/*.ts',
      ],
      env: {
        node: true,
      },
      rules: {
        '@typescript-eslint/no-magic-numbers': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        'max-len': 'off',
        'max-lines-per-function': 'off',
        'no-magic-numbers': 'off',
        'vue/max-len': 'off',
      },
    },
  ],
};
