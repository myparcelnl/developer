import { createSidebar } from './createSidebar';
// @ts-ignore
// import mockFs from 'mock-fs';

describe('auto sidebar', () => {
  // beforeEach(() => {
  //   mockFs({
  //     'path/to/basedir': {
  //       folder1: {
  //         folder1_1: {
  //           folder1_1_2: {
  //             'index.md': 'Vuepress content file',
  //           },
  //           '01.md': 'one',
  //           '02.md': 'two',
  //         },
  //         folder1_2: {
  //           'index.md': 'Vuepress content file',
  //         },
  //         'index.md': 'Vuepress content file',
  //       },
  //       folder2: {
  //
  //       },
  //       folder3: {
  //
  //       },
  //     },
  //   });
  // });
  //
  // afterEach(() => {
  //   mockFs.restore();
  // });

  it('works', () => {
    const sidebar = createSidebar();

    expect(sidebar.sidebar)
      .toStrictEqual({
        '/api-reference/': [
          {
            children: [
              '/api-reference/',
            ],
            text: 'API Reference',
          },
        ],
        '/documentation/': [
          {
            children: [
              {
                children: [
                  '/documentation/01.php-sdk/01.installation',
                  {
                    children: [
                      '/documentation/01.php-sdk/02.examples/02.using-multiple-carriers',
                      '/documentation/01.php-sdk/02.examples/03.create-multiple-consignments',
                      '/documentation/01.php-sdk/02.examples/04.create-return-in-the-box',
                      '/documentation/01.php-sdk/02.examples/05.label-format-and-position',
                      '/documentation/01.php-sdk/02.examples/06.package-type-and-options',
                      '/documentation/01.php-sdk/02.examples/07.find-consignments',
                      '/documentation/01.php-sdk/02.examples/08.query-consignments',
                      '/documentation/01.php-sdk/02.examples/09.retrieve-data-from-a-consignment',
                      '/documentation/01.php-sdk/02.examples/10.create-and-download-labels',
                      '/documentation/01.php-sdk/02.examples/11.orders',
                      '/documentation/01.php-sdk/02.examples/12.redjepakketje',
                    ],
                    link: '/documentation/01.php-sdk/02.examples/01.create-consignment',
                    text: 'Examples',
                  },
                  {
                    children: [
                      '/documentation/01.php-sdk/03.reference/02.helpers',
                      '/documentation/01.php-sdk/03.reference/03.delivery-options',
                    ],
                    link: '/documentation/01.php-sdk/03.reference/01.models',
                    text: 'Reference',
                  },
                  '/documentation/01.php-sdk/05.exceptions',
                  '/documentation/01.php-sdk/06.tips',
                  '/documentation/01.php-sdk/07.contribute',
                ],
                collapsible: true,
                link: '/documentation/01.php-sdk/',
                text: 'Php Sdk',
              },
              {
                children: [],
                collapsible: true,
                link: '/documentation/10.woocommerce/',
                text: 'Woocommerce',
              },
              {
                children: [],
                collapsible: true,
                link: '/documentation/11.prestashop/',
                text: 'Prestashop',
              },
              {
                children: [],
                collapsible: true,
                link: '/documentation/12.magento1/',
                text: 'Magento1',
              },
              {
                children: [],
                collapsible: true,
                link: '/documentation/13.magento2/',
                text: 'Magento2',
              },
              {
                children: [],
                collapsible: true,
                link: '/documentation/14.shopify/',
                text: 'Shopify',
              },
              {
                children: [],
                collapsible: true,
                link: '/documentation/15.shopware/',
                text: 'Shopware',
              },
            ],
            text: 'Documentation',
          },
        ],
        '/integrations/': [
          {
            children: [
              '/integrations/',
            ],
            text: 'Integrations',
          },
        ],
      });
  });
});
