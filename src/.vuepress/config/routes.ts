import { MyPaNavLink } from '@mptheme/config.types';

export const STATUS: MyPaNavLink = {
  text: 'Status',
  link: 'https://status.myparcel.nl/',
};

export const API_REFERENCE: MyPaNavLink = {
  text: 'API Reference',
  link: '/api-reference/',
};

export const DOCUMENTATION: MyPaNavLink = {
  text: 'Documentation',
  link: '/documentation/',
};

export const INTEGRATIONS: MyPaNavLink = {
  text: 'Integrations',
  link: '/integrations/',
};

export const ABOUT: MyPaNavLink = {
  text: 'About',
  link: '/about/',
};

export const CONTACT: MyPaNavLink = {
  text: 'Contact',
  link: '/contact/',
};

export const ROUTES = [
  ABOUT,
  API_REFERENCE,
  CONTACT,
  DOCUMENTATION,
  INTEGRATIONS,
  STATUS,
];
