import { ABOUT, API_REFERENCE, CONTACT, DOCUMENTATION, STATUS } from './routes';
import { MyPaNavbarConfigArray } from '@mptheme/config.types';

export const createFooter = (): MyPaNavbarConfigArray => {
  return [
    {
      ...DOCUMENTATION,
      children: [
        { text: 'Getting started', link: '/getting-started' },
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
        { text: 'Join our Slack workspace', link: 'https://myparcel-dev.slack.com/ssb/redirect' },
        { text: 'Learn more about partnerships', link: 'https://www.myparcel.nl/partner-worden/' },
      ],
    },
    {
      text: '',
      children: [
        STATUS,
        ABOUT,
        { text: 'Jobs', link: 'https://www.myparcel.nl/vacature/development/' },
        { text: 'GitHub', link: 'https://github.com/myparcelnl' },
        { text: 'MyParcel', link: 'https://www.myparcel.nl/' },
        { text: 'SendMyParcel', link: 'https://www.sendmyparcel.be/' },
        { text: 'Flespakket', link: 'https://www.flespakket.nl/' },
      ],
    },
  ];
};
