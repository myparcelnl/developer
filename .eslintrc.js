const noUndefComponents = [
  'error',
  {
    ignorePatterns: [
      'Badge',
      'CodeGroup',
      'CodeGroupItem',
      'Content',
      'ExternalLinkIcon',
      'NavbarSearch',
      'RouterLink',
      'RouterView',
      'Transition',
      'TransitionGroup',

      // Own components
      'AutoLink',
      'HomeLink',
    ],
  },
];

module.exports = {
  root: true,
  parserOptions: {
    requireConfigFile: false,
  },
  extends: [
    // '@myparcel/eslint-config/preset-es6',
  ],
  rules: {
    'class-methods-use-this': 'off',
    'space-before-blocks': ['error', 'always'],
  },
  overrides: [
    // Vue and related files
    {
      extends: [
        '@myparcel/eslint-config/preset-vue3',
        'plugin:vue/vue3-essential',
        '@vue/eslint-config-typescript',
      ],
      files: [
        './*.ts',
        './src/.vuepress/**/*',
        '!./src/.vuepress/*.ts',
        '!./src/.vuepress/*.js',
      ],
      rules: {
        'vue/no-unregistered-components': noUndefComponents,
        'vue/no-undef-components': noUndefComponents,
        '@typescript-eslint/restrict-plus-operands': 'off',

        // Rules are extremely slow
        '@typescript-eslint/no-misused-promises': 'off',
        '@typescript-eslint/promise-function-async': 'off',

        'padding-line-between-statements': [
          'error',
          { blankLine: 'always', prev: '*', next: 'if' },
          { blankLine: 'always', prev: 'if', next: '*' },
          { blankLine: 'never', prev: 'const', next: 'const' },
          { blankLine: 'always', prev: 'const', next: 'multiline-const' },
          { blankLine: 'always', prev: 'multiline-const', next: 'multiline-const' },
        ],
      },
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
        'max-len': 'off',
        'no-magic-numbers': 'off',
        'vue/max-len': 'off',
      },
    },

    // Jest spec files
    {
      files: ['./**/*.spec.ts'],
      extends: '@myparcel/eslint-config/plugin-jest',
    },
  ],
};
