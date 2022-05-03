import { App, h } from 'vue';
import MPContact from '@mptheme/client/views/contact/MPContact.vue';
import MPIntegrations from '@mptheme/client/views/integrations/MPIntegrations.vue';

/**
 * Register components for use in markdown files.
 */
export function registerComponents(app: App): void {
  // Layouts
  app.component('MPContact', MPContact);
  app.component('MPIntegrations', MPIntegrations);

  app.component('NavbarSearch', () => {
    const searchComponent = app.component('Docsearch') ?? app.component('SearchBox');
    return searchComponent ? h(searchComponent) : null;
  });
}
