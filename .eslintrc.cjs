/**
 * @type {import('@myparcel/eslint-config').ESLintConfig}
 */
module.exports = {
  root: true,
  overrides: [
    {
      files: ['./**/*.vue'],
      extends: ['@myparcel-eslint/eslint-config-prettier-typescript-vue', '@myparcel-eslint/eslint-config-import'],
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
      extends: ['@myparcel-eslint/eslint-config-prettier-typescript', '@myparcel-eslint/eslint-config-import'],
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
        '@myparcel-eslint/eslint-config-node',
        '@myparcel-eslint/eslint-config-esnext',
        '@myparcel-eslint/eslint-config-prettier',
        '@myparcel-eslint/eslint-config-import',
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
