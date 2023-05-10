import { describe, expect } from 'vitest';
import { Page } from 'vuepress';
import { createSidebarFromPages } from './createSidebarFromPages';

const languages = [
  {
    alpha2: 'gb',
    localeShort: 'en',
    locale: 'en-GB',
    human: 'English',
    path: '/',
  },
  {
    alpha2: 'nl',
    localeShort: 'nl',
    locale: 'nl-NL',
    human: 'Nederlands',
    path: '/nl/',
  },
];

// Note: don't fix the order. This is on purpose and reflects the actual behavior of vuepress.
const pages: Partial<Page>[] = [
  { path: '/about.html', title: 'About Us' },
  { path: '/contact.html', title: 'Contact' },
  { path: '/integrations.html', title: 'Integrations' },
  { path: '/', title: 'Go Beyond Delivery with MyParcel.' },
  { path: '/api-reference/01.requests.html', title: '1. Requests' },
  { path: '/api-reference/02.responses.html', title: '2. Responses' },
  { path: '/api-reference/', title: 'API Reference' },
  { path: '/documentation/10.woocommerce.html', title: 'WooCommerce' },
  { path: '/documentation/50.php-sdk.html', title: 'PHP SDK' },
  { path: '/documentation/51.javascript-sdk.html', title: 'JavaScript SDK' },
  { path: '/documentation/60.delivery-options.html', title: 'Delivery Options' },
  { path: '/documentation/', title: 'Documentation' },
  { path: '/nl/integraties.html', title: 'Integraties' },
  { path: '/nl/', title: 'Ga Beyond Delivery met MyParcel.' },
  { path: '/documentation/52.pdk/01.backend/01.php.html', title: 'PHP' },
  { path: '/documentation/52.pdk/01.backend.html', title: 'PDK backend' },
  { path: '/documentation/52.pdk/02.frontend.html', title: 'PDK Frontend' },
  { path: '/documentation/52.pdk/', title: 'Plugin Development Kit (PDK)' },
  { path: '/nl/documentatie/10.woocommerce.html', title: 'WooCommerce' },
];

describe('createSidebarFromPages', () => {
  it('should create sidebar from pages', () => {
    const sidebar = createSidebarFromPages(pages as Page[], languages, languages[0]);

    expect(sidebar).toMatchSnapshot();
  });
});
