import { NavLink } from '@mptheme/config.types';

export const createBottomFooter = (): NavLink[] => [
  { text: 'Voorwaarden & beleid', link: '/api-reference' },
  { text: 'Cookiestatement', link: '/documentation' },
  { text: 'Privacyverklaring', link: '/privacy' },
];
