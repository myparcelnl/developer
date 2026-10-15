// Replaces @docsearch/css, which the docsearch plugin does not inject (injectStyles: false)
import './styles/docsearch.scss';
import '@vuepress/plugin-docsearch/styles/docsearch.css';
import '@vuepress/plugin-docsearch/styles/vars.css';
import './styles/index.scss';
import {defineClientConfig} from 'vuepress/client';
import {h} from 'vue';
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
      const searchComponent = app.component('SearchBox');
      return searchComponent ? h(searchComponent) : null;
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
