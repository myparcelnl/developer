import { CustomNavLink } from '@mptheme/index.types';

export const createBottomFooter = (): CustomNavLink[] => [
  { text: 'Voorwaarden & beleid', link: '/api-reference' },
  { text: 'Cookiestatement', link: '/documentation' },
  { text: 'Privacyverklaring', link: '/privacy' },
];
