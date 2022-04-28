import { ABOUT, API_REFERENCE, CONTACT, DOCUMENTATION, INTEGRATIONS, STATUS } from './routes';
import { NavbarConfigArray } from '@mptheme/config.types';

export const createNavbar = (): NavbarConfigArray => [
  API_REFERENCE,
  DOCUMENTATION,
  INTEGRATIONS,
  ABOUT,
  { ...CONTACT, sub: true },
  { ...STATUS, sub: true },
];
