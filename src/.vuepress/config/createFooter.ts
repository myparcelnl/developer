import { ABOUT, API_REFERENCE, CONTACT, DOCUMENTATION, STATUS } from './routes';
import { MyPaNavbarConfigArray } from '@mptheme/config.types';

export const createFooter = (): MyPaNavbarConfigArray => {
  return [
    {
      ...DOCUMENTATION,
      children: [
        { text: 'Getting started', link: '/getting-started/' },
      ],
    },
    {
      ...API_REFERENCE,
      children: [
        { text: 'Data Types', link: '/api-reference/04.data-types.html' },
        { text: 'Authentication', link: '/api-reference/05.authentication.html' },
        { text: 'Shipments', link: '/api-reference/06.shipments.html' },
        { text: 'Delivery options', link: '/api-reference/08.delivery-options.html' },
        { text: 'Webhooks', link: '/api-reference/10.webhooks.html' },
      ],
    },
    {
      ...CONTACT,
      children: [
        // eslint-disable-next-line max-len,vue/max-len
        { text: 'Join our Slack workspace', link: 'https://join.slack.com/t/myparcel-dev/shared_invite/enQtNDkyNTg3NzA1MjM4LWQ5MWE5MTQ3MDg4YjU5NzdjYjk0OTY1ZDJiYjU5YzJjNzk3Yzk3NGY0OWFkZDU4MDYwZDEyZDlhZTgzOWM1MjI/' },
        { text: 'Learn more about partnerships', link: 'https://www.myparcel.nl/partner-worden/' },
      ],
    },
    {
      text: '',
      children: [
        STATUS,
        ABOUT,
        { text: 'Jobs', link: 'https://www.myparcel.nl/vacature/development/' },
        { text: 'GitHub', link: 'https://github.com/myparcelnl/' },
        { text: 'MyParcel', link: 'https://www.myparcel.nl/' },
        { text: 'SendMyParcel', link: 'https://www.sendmyparcel.be/' },
        { text: 'Flespakket', link: 'https://www.flespakket.nl/' },
      ],
    },
  ];
};
