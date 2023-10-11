import './styles/index.scss';
import {h} from 'vue';
import {defineClientConfig} from '@vuepress/client';
import {vTest} from '@mptheme/client/services/directives/vTest';
import {setupSidebarItems} from '@mptheme/client/composables';
import NotFound from './views/not-found/NotFoundPage.vue';
import Layout from './views/layout/layout/Layout.vue';

export default defineClientConfig({
  layouts: {
    Layout,
    NotFound,
  },

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
