import { UserConfig } from 'vite';
import { path } from '@vuepress/utils';
import svgLoader from 'vite-svg-loader';

export const viteConfig: UserConfig = {
  plugins: [
    svgLoader(),
  ],

  resolve: {
    alias: [
      {
        find: '@Public',
        replacement: path.resolve(__dirname, 'public'),
      },
    ],
  },

  ...process.env.DOCKER
    ? {
      server: {
        hmr: {
          clientPort: 443,
        },
      },
    }
    : {},

  css: {
    postcss: {
      plugins: [
        require('tailwindcss')(path.resolve(__dirname, 'tailwind.config.js')),
        ...process.env.NODE_ENV === 'production'
          ? [
            require('autoprefixer'),
            require('cssnano'),
          ]
          : [],
      ],
    },
  },
};
