import {path} from 'vuepress/utils';
import svgLoader from 'vite-svg-loader';
import {type ViteBundlerOptions} from '@vuepress/bundler-vite';

export const viteConfig: ViteBundlerOptions['viteOptions'] = {
  plugins: [svgLoader()],

  resolve: {
    alias: {
      '@Public': path.resolve(__dirname, 'public'),
    },
  },

  // @vuepress/helper imports vuepress/client, which only resolves inside the bundle
  ssr: {
    noExternal: ['@vuepress/helper'],
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
