import './styles/index.scss';
import AutoLink from '@Components/auto-link/AutoLink.vue';
import HomeLink from '@mptheme/client/views/home/home-link/HomeLink.vue';
import HomePartnerBrand from '@mptheme/client/views/home/home-partner-brand/HomePartnerBrand.vue';
import { defineClientAppEnhance } from '@vuepress/client';

export default defineClientAppEnhance(({ app }) => {
  app.component('AutoLink', AutoLink);
  app.component('HomeLink', HomeLink);
  app.component('HomePartnerBrand', HomePartnerBrand);
});
