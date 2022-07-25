import { ABOUT, API_REFERENCE, CONTACT, DOCUMENTATION, INTEGRATIONS, STATUS } from './routes';
import { MyPaNavbarConfigArray } from '@mptheme/config.types';

export const createNavbar = (): MyPaNavbarConfigArray => [
  API_REFERENCE,
  DOCUMENTATION,
  INTEGRATIONS,
  ABOUT,
  CONTACT,
  STATUS,
];
