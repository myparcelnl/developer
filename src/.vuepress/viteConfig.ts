import {ViteBundlerOptions} from 'vuepress';
import {path} from '@vuepress/utils';
import svgLoader from 'vite-svg-loader';

export const viteConfig: ViteBundlerOptions['viteOptions'] = {
  plugins: [
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    svgLoader(),
  ],

  resolve: {
    alias: {
      '@Public': path.resolve(__dirname, 'public'),
    },
  },

  optimizeDeps: {
    exclude: ['@vuepress/theme-default', 'fsevents'],
  },

  ...(process.env.TRAEFIK
    ? {
        server: {
          hmr: {
            clientPort: 443,
          },
        },
      }
    : {}),

  css: {
    postcss: {
      plugins: [
        require('tailwindcss')(path.resolve(__dirname, 'tailwind.config.cjs')),
        ...(process.env.NODE_ENV === 'production' ? [require('autoprefixer'), require('cssnano')] : []),
      ],
    },
  },
};
