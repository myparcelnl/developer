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
  link: '/integrations.html',
};

export const RELEASE_NOTES: MyPaNavLink = {
  text: 'Release notes',
  link: '/release-notes/api.html',
};

export const ABOUT: MyPaNavLink = {
  text: 'About',
  link: '/about.html',
};

export const CONTACT: MyPaNavLink = {
  text: 'Contact',
  link: '/contact.html',
};

export const ROUTES = [
  ABOUT,
  API_REFERENCE,
  CONTACT,
  DOCUMENTATION,
  INTEGRATIONS,
  STATUS,
  RELEASE_NOTES,
];
