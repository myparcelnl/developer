import './styles/index.scss';
import AutoLink from '@mptheme/client/components/auto-link/AutoLink.vue';
import HomeLink from '@mptheme/client/views/home/home-link/HomeLink.vue';
import HomePartnerBrand from '@mptheme/client/views/home/home-partner-brand/HomePartnerBrand.vue';
import MyPaContact from '@mptheme/client/views/contact/MyPaContact.vue';
import MyPaIntegrations from '@mptheme/client/views/integrations/MyPaIntegrations.vue';
import { defineClientAppEnhance } from '@vuepress/client';
import { h } from 'vue';
import { useScrollPromise } from '@vuepress/theme-default/lib/client';
import { vTest } from '@mptheme/client/services/directives/vTest';

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

  // Default theme stuff
  app.component('NavbarSearch', () => {
    const SearchComponent = app.component('Docsearch') || app.component('SearchBox');
    return SearchComponent ? h(SearchComponent) : null;
  });

  const scrollBehavior = router.options.scrollBehavior!;
  router.options.scrollBehavior = async(...args) => {
    await useScrollPromise().wait();
    return scrollBehavior(...args);
  };
});
