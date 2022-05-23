import { NavLink } from '@mptheme/config.types';

export const STATUS: NavLink = {
  text: 'Status',
  link: 'https://status.myparcel.nl/',
};

export const API_REFERENCE: NavLink = {
  text: 'API Reference',
  link: '/api-reference',
  image: '/images/gb.svg',
};

export const DOCUMENTATION: NavLink = {
  text: 'Documentation',
  link: '/documentation',
  multilanguage: true,
};

export const INTEGRATIONS: NavLink = {
  text: 'Integrations',
  link: '/integrations',
};

export const ABOUT: NavLink = {
  text: 'About',
  link: '/about',
};

export const CONTACT: NavLink = {
  text: 'Contact',
  link: '/contact',
};

export const ROUTES = [
  ABOUT,
  API_REFERENCE,
  CONTACT,
  DOCUMENTATION,
  INTEGRATIONS,
  STATUS,
];
