import { HeadConfig } from '@vuepress/shared/lib/types/head';

const faviconUrl = 'https://assets.myparcel.nl/skin/images/favicon';

export const head: HeadConfig[] = [
  [
    'meta',
    {
      name: 'theme-color',
      content: '#0F5C47',
    },
  ],
  [
    'meta',
    {
      name: 'apple-mobile-web-app-capable',
      content: 'yes',
    },
  ],
  [
    'meta',
    {
      name: 'apple-mobile-web-app-status-bar-style',
      content: 'black',
    },
  ],
  [
    'link',
    {
      rel: 'apple-touch-icon',
      sizes: '57x57',
      href: `${faviconUrl}/apple-icon-57x57.png`,
    },
  ],
  [
    'link',
    {
      rel: 'apple-touch-icon',
      sizes: '60x60',
      href: `${faviconUrl}/apple-icon-60x60.png`,
    },
  ],
  [
    'link',
    {
      rel: 'apple-touch-icon',
      sizes: '72x72',
      href: `${faviconUrl}/apple-icon-72x72.png`,
    },
  ],
  [
    'link',
    {
      rel: 'apple-touch-icon',
      sizes: '76x76',
      href: `${faviconUrl}/apple-icon-76x76.png`,
    },
  ],
  [
    'link',
    {
      rel: 'apple-touch-icon',
      sizes: '114x114',
      href: `${faviconUrl}/apple-icon-114x114.png`,
    },
  ],
  [
    'link',
    {
      rel: 'apple-touch-icon',
      sizes: '120x120',
      href: `${faviconUrl}/apple-icon-120x120.png`,
    },
  ],
  [
    'link',
    {
      rel: 'apple-touch-icon',
      sizes: '144x144',
      href: `${faviconUrl}/apple-icon-144x144.png`,
    },
  ],
  [
    'link',
    {
      rel: 'apple-touch-icon',
      sizes: '152x152',
      href: `${faviconUrl}/apple-icon-152x152.png`,
    },
  ],
  [
    'link',
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: `${faviconUrl}/apple-icon-180x180.png`,
    },
  ],
  [
    'link',
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '192x192',
      href: `${faviconUrl}/android-icon-192x192.png`,
    },
  ],
  [
    'link',
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: `${faviconUrl}/favicon-32x32.png`,
    },
  ],
  [
    'link',
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '96x96',
      href: `${faviconUrl}/favicon-96x96.png`,
    },
  ],
  [
    'link',
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: `${faviconUrl}/favicon-16x16.png`,
    },
  ],
  [
    'meta',
    {
      name: 'msapplication-TileColor',
      content: '#0F5C47',
    },
  ],
  [
    'meta',
    {
      name: 'msapplication-TileImage',
      content: `${faviconUrl}/ms-icon-144x144.png`,
    },
  ],
  [
    'meta',
    {
      name: 'ahrefs-site-verification',
      content: 'a73e0596cc0f3a8aeaa8c77cd8fda2a5df7776d8522576b39acd9b071d3d77d2',
    },
  ],
];
