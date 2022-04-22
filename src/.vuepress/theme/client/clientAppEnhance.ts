import './styles/index.scss';
import AutoLink from '@mptheme/client/components/auto-link/AutoLink.vue';
import DataType from '@mptheme/client/components/global/DataType.vue';
import DataTypeDefinition from '@mptheme/client/components/global/DataTypeDefinition.vue';
import HomeLink from '@mptheme/client/views/home/home-link/HomeLink.vue';
import HomePartnerBrand from '@mptheme/client/views/home/home-partner-brand/HomePartnerBrand.vue';
import Http from '@mptheme/client/components/global/Http.vue';
import Integration from '@mptheme/client/components/global/Integration.vue';
import MyPaContact from '@mptheme/client/views/contact/MyPaContact.vue';
import MyPaIntegrations from '@mptheme/client/views/integrations/MyPaIntegrations.vue';
import { defineClientAppEnhance } from '@vuepress/client';
import { h } from 'vue';
import { useScrollPromise } from '@vuepress/theme-default/lib/client';
import { vTest } from '@mptheme/client/services/directives/vTest';
import Stack from '@mptheme/client/components/global/Stack.vue';
import NpmBadge from '@mptheme/client/components/global/NpmBadge.vue';

export default defineClientAppEnhance(({ app, router }) => {
  // Directives
  app.directive('test', vTest);

  // Layouts
  app.component('MyPaContact', MyPaContact);
  app.component('MyPaIntegrations', MyPaIntegrations);

  // Components
  app.component('AutoLink', AutoLink);
  app.component('HomeLink', HomeLink);
  app.component('HomePartnerBrand', HomePartnerBrand);

  // eslint-disable-next-line vue/multi-word-component-names
  app.component('DataType', DataType);
  app.component('DataTypeDefinition', DataTypeDefinition);
  app.component('Http', Http);
  app.component('Integration', Integration);
  app.component('NpmBadge', NpmBadge);
  app.component('Stack', Stack);

  // Default theme stuff
  app.component('NavbarSearch', () => {
    const searchComponent = app.component('Docsearch') || app.component('SearchBox');
    return searchComponent ? h(searchComponent) : null;
  });

  const { scrollBehavior } = router.options;

  router.options.scrollBehavior = async(...args) => {
    await useScrollPromise().wait();
    return scrollBehavior?.(...args);
  };
});
