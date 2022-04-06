import { ABOUT, API_REFERENCE, CHANGELOG, CONTACT, DOCUMENTATION, STATUS } from './routes';
import { NavbarConfigArray } from '@mptheme/config.types';

export const createFooter = (): NavbarConfigArray => [
  {
    ...DOCUMENTATION,
    children: [
      { text: 'Getting started', link: '/team' },
      { text: 'API guides', link: '/team' },
      { text: 'Plugin guides', link: '/team' },
    ],
  },
  {
    ...API_REFERENCE,
    children: [
      { text: 'Data types', link: '/team' },
      { text: 'Authentication', link: '/team' },
      { text: 'Shipments', link: '/team' },
      { text: 'Labels', link: '/team' },
      { text: 'Track & Trace', link: '/team' },
      { text: 'Delivery options', link: '/team' },
      { text: 'Webhooks', link: '/team' },
    ],
  },

  {
    ...CONTACT,
    children: [
      { text: 'Join our Slack workspace', link: 'https://slack.com' },
      { text: 'Send a message', link: '/contact' },
      { text: 'Feature request', link: '/contact' },
      { text: 'Team', link: '/team' },
    ],
  },

  {
    text: '',
    children: [
      STATUS,
      CHANGELOG,
      ABOUT,
      CONTACT,
      { text: 'Jobs', link: '/jobs' },
      { text: 'GitHub', link: 'https://github.com/myparcelnl' },
    ],
  },
];
