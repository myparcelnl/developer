import { App, h } from 'vue';
import AutoLink from '@mptheme/client/components/auto-link/AutoLink.vue';
import DataType from '@mptheme/client/components/global/DataType.vue';
import DataTypeDefinition from '@mptheme/client/components/global/DataTypeDefinition.vue';
import HomeLink from '@mptheme/client/views/home/home-link/HomeLink.vue';
import HomePartnerBrand from '@mptheme/client/views/home/home-partner-brand/HomePartnerBrand.vue';
import Http from '@mptheme/client/components/global/Http.vue';
import Integration from '@mptheme/client/components/global/Integration.vue';
import MPContact from '@mptheme/client/views/contact/MPContact.vue';
import MPImg from '@mptheme/client/components/common/MPImg.vue';
import MPIntegrations from '@mptheme/client/views/integrations/MPIntegrations.vue';
import NpmBadge from '@mptheme/client/components/global/NpmBadge.vue';
import Stack from '@mptheme/client/components/global/Stack.vue';

/**
 * Register components for use in markdown files.
 */
export function registerComponents(app: App): void {
  // Layouts
  app.component('MPContact', MPContact);
  app.component('MPIntegrations', MPIntegrations);

  // Components
  app.component('AutoLink', AutoLink);
  app.component('DataType', DataType);
  app.component('DataTypeDefinition', DataTypeDefinition);
  app.component('HomeLink', HomeLink);
  app.component('HomePartnerBrand', HomePartnerBrand);
  app.component('Http', Http);
  app.component('Integration', Integration);
  app.component('MPImg', MPImg);
  app.component('NpmBadge', NpmBadge);
  app.component('Stack', Stack);

  app.component('NavbarSearch', () => {
    const searchComponent = app.component('Docsearch') ?? app.component('SearchBox');
    return searchComponent ? h(searchComponent) : null;
  });
}
