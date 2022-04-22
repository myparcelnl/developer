import { ABOUT, API_REFERENCE, CONTACT, DOCUMENTATION, STATUS } from './routes';
import { NavbarConfigArray } from '@mptheme/config.types';

export const createFooter = (): NavbarConfigArray => {
  return [
    {
      ...DOCUMENTATION,
      children: [
        { text: 'Getting started', link: '/documentation/getting-started' },
      ],
    },
    {
      ...API_REFERENCE,
      children: [
        { text: 'Data Types', link: '/api-reference/04.data-types' },
        { text: 'Authentication', link: '/api-reference/05.authentication' },
        { text: 'Shipments', link: '/api-reference/06.shipments' },
        { text: 'Delivery options', link: '/api-reference/08.delivery-options' },
        { text: 'Webhooks', link: '/api-reference/10.webhooks' },
      ],
    },
    {
      ...CONTACT,
      children: [
        { text: 'Join our Slack workspace', link: 'https://slack.com' },
      ],
    },
    {
      text: '',
      children: [
        STATUS,
        ABOUT,
        CONTACT,
        { text: 'Jobs', link: 'https://www.myparcel.nl/vacature/development/' },
        { text: 'GitHub', link: 'https://github.com/myparcelnl' },
        { text: 'MyParcel', link: 'https://www.myparcel.nl/' },
        { text: 'SendMyParcel', link: 'https://www.sendmyparcel.be/' },
        { text: 'Flespakket', link: 'https://www.flespakket.nl/' },
      ],
    },
  ];
};
