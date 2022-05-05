import './styles/index.scss';
import { defineClientAppEnhance } from '@vuepress/client';
import { h } from 'vue';
import { useScrollPromise } from '@vuepress/theme-default/lib/client';
import { vTest } from '@mptheme/client/services/directives/vTest';

export default defineClientAppEnhance(({ app, router }) => {
  app.component('NavbarSearch', () => {
    const searchComponent = app.component('Docsearch') ?? app.component('SearchBox');
    return searchComponent ? h(searchComponent) : null;
  });

  // Directives
  app.directive('test', vTest);

  // Default theme stuff
  const { scrollBehavior } = router.options;

  router.options.scrollBehavior = async(...args) => {
    await useScrollPromise().wait();
    return scrollBehavior?.(...args);
  };

  app.component('AutoLinkExternalIcon', () => {
    const externalLinkIcon = app.component('ExternalLinkIcon');

    if (externalLinkIcon) {
      return h(externalLinkIcon);
    }

    return null;
  });
});
