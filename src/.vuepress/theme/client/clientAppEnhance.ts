import './styles/index.scss';
import { defineClientAppEnhance } from '@vuepress/client';
import { h } from 'vue';
import { registerComponents } from '@mptheme/client/registerComponents';
import { useScrollPromise } from '@vuepress/theme-default/lib/client';
import { vTest } from '@mptheme/client/services/directives/vTest';

export default defineClientAppEnhance(({ app, router }) => {
  registerComponents(app);

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
