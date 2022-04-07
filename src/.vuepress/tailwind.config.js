const defaultTheme = require('tailwindcss/defaultTheme');
const { path } = require('@vuepress/utils');
const defaultColors = require('tailwindcss/colors');

const colors = {
  moss: {
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
 * @type {import('tailwindcss/tailwind-config').TailwindConfig}
 */
module.exports = {
  content: [
    `!${path.resolve(__dirname, '.cache')}`,
    `!${path.resolve(__dirname, '.temp')}`,
    `!${path.resolve(__dirname, 'dist')}`,
    path.resolve(__dirname, '**/*.{ts,vue}'),
    path.resolve(__dirname, '..', '**/*.md'),
  ],
  darkMode: 'class',
  theme: {
    borderRadius: {
      none: '0',
      DEFAULT: '0.175rem',
      md: '0.5rem',
      lg: '1rem',
      xl: '1.875rem',
      full: '9999px',
      // none: '0px',
      // sm: '0.125rem',
      // DEFAULT: '0.25rem',
      // md: '0.375rem',
      // lg: '0.5rem',
      // xl: '0.75rem',
      // '2xl': '1rem',
      // '3xl': '1.5rem',
      // full: '9999px'
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
    },
    variables: {
      DEFAULT: {
        c: {
          text: {
            accent: colors.goldfish['500'],
            light: '',
            lighter: '',
            lightest: '',
            quote: '',
          },
          brand: {
            DEFAULT: colors.moss['500'],
            light: colors.moss['300'],
          },
          bg: {
            DEFAULT: '#fff',
            arrow: '',
            light: '',
            lighter: '',
            navbar: '',
            sidebar: '',
          },
          border: {
            dark: '',
          },
          tip: {
            DEFAULT: colors.goldfish['500'],
            bg: colors.goldfish['100'],
            title: colors.goldfish['900'],
            text: {
              DEFAULT: colors.goldfish['800'],
              accent: colors.goldfish['500'],
            },
          },
          warning: {
            text: defaultColors.amber['500'],
            bg: defaultColors.amber['100'],
            title: defaultColors.amber['900'],
          },
          danger: {
            text: defaultColors.rose['500'],
            bg: defaultColors.rose['100'],
            title: defaultColors.rose['900'],
          },
          details: {
            text: defaultColors.sky['500'],
            bg: defaultColors.sky['100'],
            title: defaultColors.sky['900'],
          },
          badge: {
            danger: defaultColors.rose['500'],
            tip: defaultColors.sky['500'],
            warning: defaultColors.amber['500'],
          },
        },
      },
    },
  },
  plugins: [
    require('@mertasan/tailwindcss-variables'),
  ],
};
