import {type ViteBundlerOptions} from 'vuepress';
import svgLoader from 'vite-svg-loader';
import {path} from '@vuepress/utils';

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
            // eslint-disable-next-line @typescript-eslint/no-magic-numbers
            clientPort: 443,
          },
        },
      }
    : {}),
};
