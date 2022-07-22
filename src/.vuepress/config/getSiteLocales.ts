import { LocaleData } from 'vuepress';

export const getSiteLocales = (): LocaleData => ({
  '/': {
    description: 'Connect with our API and get started with shipments, returns and more.',
    lang: 'en-GB',
    title: 'MyParcel',
  },

  '/nl/': {
    description: 'Verbind met onze API en begin met zendingen, retouren en meer.',
    lang: 'nl-NL',
    title: 'MyParcel',
  },
});
