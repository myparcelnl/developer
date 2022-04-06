import { ABOUT, API_REFERENCE, CHANGELOG, CONTACT, DOCUMENTATION, INTEGRATIONS, STATUS } from './routes';
import { NavbarConfigArray } from '@mptheme/config.types';

export const createNavbar = (): NavbarConfigArray => [
  API_REFERENCE,
  DOCUMENTATION,
  INTEGRATIONS,
  { ...STATUS, sub: true },
  { ...CHANGELOG, sub: true },
  { ...ABOUT, sub: true },
  { ...CONTACT, sub: true },
];
