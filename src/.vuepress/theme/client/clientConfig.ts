import './styles/fonts/icons.scss';
import './styles/fonts/proxima-nova.scss';
import './styles/index.scss';
import {defineClientConfig} from '@vuepress/client';
import {h} from 'vue';
import {setupSidebarItems} from '@mptheme/client/composables';
import {vTest} from '@mptheme/client/services/directives/vTest';

export default defineClientConfig({
  enhance(context) {
    const {app, router} = context;

    app.component('NavbarSearch', () => {
      const searchComponent = app.component('Docsearch') ?? app.component('SearchBox');
      return searchComponent ? h(searchComponent) : null;
    });

    app.component('AutoLinkExternalIcon', () => {
      const externalLinkIcon = app.component('ExternalLinkIcon');
      return externalLinkIcon ? h(externalLinkIcon) : null;
    });

    // Directives
    app.directive('test', vTest);

    // Makes clicking anchor links scroll to the correct position, honoring the header height.
    router.options.scrollBehavior = (to, from, savedPosition) => {
      if (savedPosition) {
        return savedPosition;
      }

      if (to.hash) {
        return document.getElementById(to.hash.substring(1))?.scrollIntoView();
      }

      return window.scrollTo({top: 0});
    };
  },

  setup() {
    setupSidebarItems();
  },
});
