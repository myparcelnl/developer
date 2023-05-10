import {GoogleTagManagerPluginOptions} from '../shared';
import {defineClientConfig} from '@vuepress/client';
import {useSetupGoogleTagManager} from './composables';

// eslint-disable-next-line @typescript-eslint/naming-convention,no-underscore-dangle
declare const __GTM_OPTIONS__: GoogleTagManagerPluginOptions;

export default defineClientConfig({
  enhance() {
    if (__VUEPRESS_SSR__) {
      return;
    }

    useSetupGoogleTagManager(__GTM_OPTIONS__);
  },
});
