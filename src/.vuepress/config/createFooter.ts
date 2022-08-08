import { MyPaNavbarConfigArray } from '@mptheme/config.types';

export const createFooter = (): MyPaNavbarConfigArray => {
  return [
    {
      text: 'Documentation',
      link: '/documentation/',
      children: [
        { text: 'Getting started', link: '/getting-started/' },
        { text: 'WooCommerce', link: '/10.woocommerce/' },
        { text: 'Prestashop', link: '/11.prestashop/' },
        { text: 'Magento2', link: '/13.magento2/' },
        { text: 'Shopify', link: '/14.shopify/' },
        { text: 'Shopware', link: '/15.shopware/' },
        { text: 'Wix', link: '/20.wix/' },
        { text: 'PHP SDK', link: '/50.php-sdk/' },
        { text: 'JavaScript SDK', link: '/51.javascript-sdk/' },
        { text: 'Delivery Options', link: '/60.delivery-options/' },
      ],
    },
    {
      text: 'API Reference',
      link: '/api-reference/',
      children: [
        { text: 'Data Types', link: '/api-reference/04.data-types.html' },
        { text: 'Authentication', link: '/api-reference/05.authentication.html' },
        { text: 'Shipments', link: '/api-reference/06.shipments.html' },
        { text: 'Delivery options', link: '/api-reference/08.delivery-options.html' },
        { text: 'Webhooks', link: '/api-reference/10.webhooks.html' },
      ],
    },
    {
      text: 'Contact',
      link: '/contact/',
      children: [
        // eslint-disable-next-line max-len,vue/max-len
        {
          text: 'Join our Slack workspace',
          link: 'https://join.slack.com/t/myparcel-dev/shared_invite/enQtNDkyNTg3NzA1MjM4LWQ5MWE5MTQ3MDg4YjU5NzdjYjk0OTY1ZDJiYjU5YzJjNzk3Yzk3NGY0OWFkZDU4MDYwZDEyZDlhZTgzOWM1MjI/',
        },
        { text: 'Learn more about partnerships', link: 'https://www.myparcel.nl/partner-worden/' },
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
          link: '/about/',
        },
        { text: 'Jobs', link: 'https://www.myparcel.nl/vacature/development/' },
        { text: 'GitHub', link: 'https://github.com/myparcelnl/' },
        { text: 'MyParcel', link: 'https://www.myparcel.nl/' },
        { text: 'SendMyParcel', link: 'https://www.sendmyparcel.be/' },
        { text: 'Flespakket', link: 'https://www.flespakket.nl/' },
      ],
    },
  ];
};
