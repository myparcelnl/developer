/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  overrides: [
    {
      files: ['./**/*.vue'],
      extends: ['@myparcel-dev/eslint-config-prettier-typescript-vue', '@myparcel-dev/eslint-config-import'],
      rules: {
        '@typescript-eslint/no-misused-promises': 'off',
        'vue/no-bare-strings-in-template': 'off',
        'vue/no-undef-components': [
          'error',
          {
            ignorePatterns: ['Content', 'ExternalLinkIcon', 'Layout', 'NavbarSearch', 'RouterLink', 'RouterView'],
          },
        ],
      },
    },
    {
      files: ['./**/*.ts', './**/*.tsx'],
      extends: ['@myparcel-dev/eslint-config-prettier-typescript', '@myparcel-dev/eslint-config-import'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-misused-promises': 'off',
        'class-methods-use-this': 'off',
      },
    },
    {
      files: ['./**/*.js', './**/*.cjs', './**/*.mjs'],
      parserOptions: {
        sourceType: 'module',
      },
      extends: [
        '@myparcel-dev/eslint-config-node',
        '@myparcel-dev/eslint-config-esnext',
        '@myparcel-dev/eslint-config-prettier',
        '@myparcel-dev/eslint-config-import',
      ],
    },
    {
      files: ['./**/*.spec.*', './**/*.test.*', './**/__tests__/**', './**/*Test.*'],
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-magic-numbers': 'off',
        'max-len': 'off',
        'max-lines-per-function': 'off',
      },
    },
  ],
};
