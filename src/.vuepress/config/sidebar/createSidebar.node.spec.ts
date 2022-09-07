import { describe, expect } from 'vitest';
import { createPageData } from './createPageData';
import { Page } from 'vuepress';

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

const pages = [
  { path: '/', title: 'Go Beyond Delivery with MyParcel.' },
  { path: '/api-reference/01.requests.html', title: '1. Requests' },
  { path: '/api-reference/02.responses.html', title: '2. Responses' },
  { path: '/api-reference/', title: 'API Reference' },
  { path: '/nl/about.html', title: 'Over ons' },
  { path: '/nl/', title: 'Ga Beyond Delivery met MyParcel.' },
  { path: '/nl/documentatie/', title: 'Documentatie' },
  { path: '/nl/documentatie/10.woocommerce.html', title: 'WooCommerce' },
  { path: '/nl/documentatie/11.prestashop.html', title: 'PrestaShop' },
] as Page[];

describe('createSidebar', () => {
  it('should create sidebar', () => {
    const sidebar = {};

    pages
      .sort((pageA, pageB) => pageA.path.localeCompare(pageB.path))
      .forEach((page) => {
        createPageData(page, languages, languages[0], sidebar);
      });

    expect(sidebar).toStrictEqual({
      '/': {
        '/': {
          text: 'Go Beyond Delivery with MyParcel.',
          link: '/',
        },

        '/api-reference': {
          text: 'API Reference',
          link: '/api-reference/',
          children: [
            {
              text: '1. Requests',
              link: '/api-reference/01.requests.html',
            },
            {
              text: '2. Responses',
              link: '/api-reference/02.responses.html',
            },
          ],
        },
      },

      '/nl': {
        '/': {
          text: 'Ga Beyond Delivery met MyParcel.',
          link: '/nl/',
        },
        '/about': {
          text: 'Over ons',
          link: '/nl/about.html',
        },
        '/documentatie': {
          text: 'Documentatie',
          link: '/nl/documentatie/',
          children: [
            {
              text: 'WooCommerce',
              link: '/nl/documentatie/10.woocommerce.html',
            },
            {
              text: 'PrestaShop',
              link: '/nl/documentatie/11.prestashop.html',
            },
          ],
        },
      },
    });
  });
});
