import './styles/index.scss';
import AutoLink from '@mptheme/client/components/auto-link/AutoLink.vue';
import HomeLink from '@mptheme/client/views/home/home-link/HomeLink.vue';
import HomePartnerBrand from '@mptheme/client/views/home/home-partner-brand/HomePartnerBrand.vue';
import { defineClientAppEnhance } from '@vuepress/client';
import { vTest } from '@mptheme/client/services/directives/vTest';

export default defineClientAppEnhance(({ app }) => {
  app.directive('test', vTest);

  app.component('AutoLink', AutoLink);
  app.component('HomeLink', HomeLink);
  app.component('HomePartnerBrand', HomePartnerBrand);
});
