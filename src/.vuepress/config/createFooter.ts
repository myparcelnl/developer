import {type MyPaNavbarConfigArray} from '@mptheme/config.types';

// eslint-disable-next-line max-lines-per-function
export const createFooter = (): MyPaNavbarConfigArray => {
  return [
    {
      text: 'Documentation',
      link: '/documentation/',
      children: [
        {text: 'Getting started', link: '/getting-started.html'},
        {text: 'WooCommerce', link: '/nl/documentatie/10.woocommerce.html'},
        {text: 'Prestashop', link: '/nl/documentatie/11.prestashop.html'},
        {text: 'Magento2', link: '/nl/documentatie/13.magento2.html'},
        {text: 'Shopify', link: '/nl/documentatie/14.shopify.html'},
        {text: 'Shopware', link: '/nl/documentatie/15.shopware.html'},
        {text: 'Ecwid', link: '/nl/documentatie/17.ecwid.html'},
        {text: 'Bol.', link: '/nl/documentatie/18.bol.html'},
        {text: 'Wix', link: '/nl/documentatie/20.wix.html'},
        {text: 'Amazon', link: '/nl/documentatie/25.amazon.html'},
        {text: 'Etsy', link: '/nl/documentatie/30.etsy.html'},
        {text: 'PHP SDK', link: '/50.php-sdk.html'},
        {text: 'JavaScript SDK', link: '/51.javascript-sdk.html'},
        {text: 'Delivery Options', link: '/60.delivery-options.html'},
      ],
    },
    {
      text: 'API Reference',
      link: '/api-reference/',
      children: [
        {text: 'Data Types', link: '/api-reference/04.data-types.html'},
        {text: 'Authentication', link: '/api-reference/05.authentication.html'},
        {text: 'Shipments', link: '/api-reference/06.shipments.html'},
        {text: 'Delivery options', link: '/api-reference/08.delivery-options.html'},
        {text: 'Webhooks', link: '/api-reference/10.webhooks.html'},
      ],
    },
    {
      text: 'Contact',
      link: '/contact.html',
      children: [
        // eslint-disable-next-line max-len,vue/max-len
        {
          text: 'Join our Slack workspace',
          link: 'https://join.slack.com/t/myparcel-dev/shared_invite/enQtNDkyNTg3NzA1MjM4LWQ5MWE5MTQ3MDg4YjU5NzdjYjk0OTY1ZDJiYjU5YzJjNzk3Yzk3NGY0OWFkZDU4MDYwZDEyZDlhZTgzOWM1MjI/',
        },
        {text: 'Learn more about partnerships', link: 'https://www.myparcel.nl/partner-worden/'},
      ],
    },
    {
      text: '',
      children: [
        {
          text: 'Status',
          link: 'https://status.myparcel.nl/',
        },
        {
          text: 'About',
          link: '/about.html',
        },
        {text: 'Jobs', link: 'https://www.myparcel.nl/vacature/development/'},
        {text: 'GitHub', link: 'https://github.com/myparcelnl/'},
        {text: 'MyParcel', link: 'https://www.myparcel.nl/'},
        {text: 'SendMyParcel', link: 'https://www.sendmyparcel.be/'},
        {text: 'Flespakket', link: 'https://www.flespakket.nl/'},
      ],
    },
  ];
};
