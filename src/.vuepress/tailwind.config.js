/* eslint-disable @typescript-eslint/no-magic-numbers */
const defaultTheme = require('tailwindcss/defaultTheme');
const { path } = require('@vuepress/utils');

const colors = {
  monstera: {
    100: '#CFDEDA',
    200: '#9FBEB5',
    300: '#6F9D91',
    400: '#3F7D6C',
    500: '#0F5C47',
    600: '#0C4A39',
    700: '#09372B',
    800: '#06251C',
    900: '#03120E',
  },
  goldfish: {
    100: '#FFE8CC',
    200: '#FFD199',
    300: '#FFBA66',
    400: '#FFA333',
    500: '#FF8C00',
    600: '#CC7000',
    700: '#995400',
    800: '#663800',
    900: '#331C00',
  },
};

/**
 * @name {import('tailwindcss/tailwind-config').TailwindConfig}
 */
module.exports = {
  content: [
    `!${path.resolve(__dirname, '.cache')}`,
    `!${path.resolve(__dirname, '.temp')}`,
    `!${path.resolve(__dirname, 'dist')}`,
    path.resolve(__dirname, '**/*.{ts,vue,json}'),
    path.resolve(__dirname, '..', '**/*.md'),
  ],
  safelist: [
    // prevent code styles in base layer from getting purged.
    'token',
    'highlight-lines',
    'highlight-line',
  ],
  darkMode: 'class',
  theme: {
    borderRadius: {
      none: '0',
      sm: '0.175rem',
      DEFAULT: '0.5rem',
      lg: '1rem',
      xl: '1.875rem',
      full: '9999px',
    },
    extend: {
      colors,
      boxShadow: {
        DEFAULT:
          '0 4px 6px 0 rgba(0, 0, 0, 0.1), 0 4px 6px 0 rgba(0, 0, 0, 0.06)',
      },
      fontFamily: {
        display: ['Proxima Nova', ...defaultTheme.fontFamily.sans],
      },
      maxHeight: ({ theme }) => defaultTheme.height(theme),
      maxWidth: ({ theme }) => defaultTheme.width(theme),
      minHeight: ({ theme }) => defaultTheme.height(theme),
      minWidth: ({ theme }) => defaultTheme.width(theme),
    },
  },
};
