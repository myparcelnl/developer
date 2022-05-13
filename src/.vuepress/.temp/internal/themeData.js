export const themeData = {
  "contributors": true,
  "docsBranch": "main",
  "docsDir": "/src/",
  "editLink": true,
  "logo": "images/logo.svg",
  "logoDark": "images/logo_dark.svg",
  "repo": "https://github.com/myparcelnl/developer",
  "navbar": [
    {
      "text": "API Reference",
      "link": "/api-reference"
    },
    {
      "text": "Documentation",
      "link": "/documentation"
    },
    {
      "text": "Integrations",
      "link": "/integrations"
    },
    {
      "text": "About",
      "link": "/about"
    },
    {
      "text": "Contact",
      "link": "/contact"
    },
    {
      "text": "Status",
      "link": "https://status.myparcel.nl/"
    }
  ],
  "sidebar": {
    "/about": [
      {
        "text": "About",
        "children": []
      }
    ],
    "/api-reference": [
      {
        "text": "API Reference",
        "children": [
          "/api-reference/01.requests",
          "/api-reference/02.responses",
          "/api-reference/03.character-encoding",
          "/api-reference/04.data-types",
          "/api-reference/05.authentication",
          "/api-reference/06.shipments",
          "/api-reference/07.shipment-related-object-definitions",
          "/api-reference/08.delivery-options",
          "/api-reference/09.delivery-options-object-definitions",
          "/api-reference/10.webhooks",
          "/api-reference/11.webhook-object-definitions",
          "/api-reference/12.drop-off-points"
        ]
      }
    ],
    "/documentation": [
      {
        "text": "Documentation",
        "children": [
          {
            "children": [
              "/documentation/10.woocommerce/",
              "/documentation/10.woocommerce/02.installatie",
              {
                "children": [
                  "/documentation/10.woocommerce/03.configuratie/01.algemeen",
                  "/documentation/10.woocommerce/03.configuratie/02.standaard-exportinstellingen",
                  "/documentation/10.woocommerce/03.configuratie/03.checkout-instellingen",
                  "/documentation/10.woocommerce/03.configuratie/04.postnl",
                  "/documentation/10.woocommerce/03.configuratie/05.veelgestelde-vragen-over-de-configuratie"
                ],
                "text": "Configuratie"
              },
              "/documentation/10.woocommerce/04.plugin-gebruik",
              "/documentation/10.woocommerce/10.contribute"
            ],
            "text": "Woocommerce",
            "collapsible": true
          },
          {
            "children": [
              "/documentation/11.prestashop/",
              "/documentation/11.prestashop/02.installatie",
              {
                "children": [
                  "/documentation/11.prestashop/03.configuratie/01.api-instellingen",
                  "/documentation/11.prestashop/03.configuratie/02.algemene-instellingen",
                  "/documentation/11.prestashop/03.configuratie/03.label-instellingen",
                  "/documentation/11.prestashop/03.configuratie/04.order-opties",
                  "/documentation/11.prestashop/03.configuratie/05.customs-instellingen",
                  "/documentation/11.prestashop/03.configuratie/06.vervoerders-opties",
                  "/documentation/11.prestashop/03.configuratie/07.gebruik-van-de-plugin",
                  "/documentation/11.prestashop/03.configuratie/08.faq"
                ],
                "text": "Configuratie"
              },
              "/documentation/11.prestashop/10.contribute"
            ],
            "text": "Prestashop",
            "collapsible": true
          },
          {
            "children": [
              "/documentation/13.magento2/",
              "/documentation/13.magento2/02.installatie",
              {
                "children": [
                  "/documentation/13.magento2/03.configuratie/01.configuratie",
                  "/documentation/13.magento2/03.configuratie/02.algemene-instellingen",
                  "/documentation/13.magento2/03.configuratie/03.standaard-verzendinstellingen",
                  "/documentation/13.magento2/03.configuratie/04.backend-functionaliteiten",
                  "/documentation/13.magento2/03.configuratie/05.checkout-instellingen",
                  "/documentation/13.magento2/03.configuratie/06.veelgestelde-vragen"
                ],
                "text": "Configuratie"
              }
            ],
            "text": "Magento2",
            "collapsible": true
          },
          {
            "children": [
              "/documentation/14.shopify/",
              "/documentation/14.shopify/02.installatie",
              {
                "children": [
                  "/documentation/14.shopify/03.configuratie/01.account",
                  "/documentation/14.shopify/03.configuratie/02.algemene-instellingen",
                  "/documentation/14.shopify/03.configuratie/03.standaard-exportinstellingen",
                  "/documentation/14.shopify/03.configuratie/04.herinneringsmail-afhaallocatie",
                  "/documentation/14.shopify/03.configuratie/05.wereldzendingen",
                  "/documentation/14.shopify/03.configuratie/06.veelgestelde-vragen-over-de-configuratie"
                ],
                "text": "Configuratie"
              },
              "/documentation/14.shopify/04.plugin-gebruik"
            ],
            "text": "Shopify",
            "collapsible": true
          },
          {
            "children": [
              "/documentation/15.shopware/",
              "/documentation/15.shopware/02.installatie",
              {
                "children": [
                  "/documentation/15.shopware/03.configuratie/01.api-instellingen",
                  "/documentation/15.shopware/03.configuratie/02.toon-pickup-punten-bij-afrekenen",
                  "/documentation/15.shopware/03.configuratie/03.standaard-afleveringsperiode",
                  "/documentation/15.shopware/03.configuratie/04.standaard-handtekening-bij-bezorging",
                  "/documentation/15.shopware/03.configuratie/05.standaard-aflevering-bij-buren",
                  "/documentation/15.shopware/03.configuratie/06.retour-bij-geen-gehoor",
                  "/documentation/15.shopware/03.configuratie/07.leeftijdscontrole",
                  "/documentation/15.shopware/03.configuratie/08.standaard-verpakkingssoort",
                  "/documentation/15.shopware/03.configuratie/09.toon-ochtend-levering",
                  "/documentation/15.shopware/03.configuratie/10.toon-avond-levering",
                  "/documentation/15.shopware/03.configuratie/11.standaard-verzendwijze",
                  "/documentation/15.shopware/03.configuratie/12.label-instellingen"
                ],
                "text": "Configuratie"
              },
              "/documentation/15.shopware/04.plugin-gebruik"
            ],
            "text": "Shopware",
            "collapsible": true
          },
          {
            "children": [
              "/documentation/20.wix/",
              "/documentation/20.wix/02.installatie",
              {
                "children": [
                  "/documentation/20.wix/03.configuratie/01.pakketvoorkeuren",
                  "/documentation/20.wix/03.configuratie/02.veelgestelde-vragen-over-de-configuratie"
                ],
                "text": "Configuratie"
              },
              "/documentation/20.wix/04.plugin-gebruik"
            ],
            "text": "Wix",
            "collapsible": true
          },
          {
            "children": [
              "/documentation/50.php-sdk/",
              "/documentation/50.php-sdk/01.installation",
              {
                "children": [
                  "/documentation/50.php-sdk/02.examples/01.create-consignment",
                  "/documentation/50.php-sdk/02.examples/02.using-multiple-carriers",
                  "/documentation/50.php-sdk/02.examples/03.create-multiple-consignments",
                  "/documentation/50.php-sdk/02.examples/04.create-return-in-the-box",
                  "/documentation/50.php-sdk/02.examples/05.label-format-and-position",
                  "/documentation/50.php-sdk/02.examples/06.package-type-and-options",
                  "/documentation/50.php-sdk/02.examples/07.find-consignments",
                  "/documentation/50.php-sdk/02.examples/08.query-consignments",
                  "/documentation/50.php-sdk/02.examples/09.retrieve-data-from-a-consignment",
                  "/documentation/50.php-sdk/02.examples/10.create-and-download-labels",
                  "/documentation/50.php-sdk/02.examples/11.orders",
                  "/documentation/50.php-sdk/02.examples/12.instabox",
                  "/documentation/50.php-sdk/02.examples/13.webhooks"
                ],
                "text": "Examples"
              },
              {
                "children": [
                  "/documentation/50.php-sdk/03.reference/01.models",
                  "/documentation/50.php-sdk/03.reference/02.helpers",
                  "/documentation/50.php-sdk/03.reference/03.delivery-options"
                ],
                "text": "Reference"
              },
              "/documentation/50.php-sdk/05.exceptions",
              "/documentation/50.php-sdk/06.tips",
              "/documentation/50.php-sdk/07.contribute"
            ],
            "text": "Php Sdk",
            "collapsible": true
          },
          {
            "children": [
              "/documentation/51.js-sdk/",
              "/documentation/51.js-sdk/01.installation",
              "/documentation/51.js-sdk/10.usage-examples",
              "/documentation/51.js-sdk/20.endpoints",
              "/documentation/51.js-sdk/99.contributing"
            ],
            "text": "Js Sdk",
            "collapsible": true
          }
        ]
      }
    ]
  },
  "footer": [
    {
      "text": "Documentation",
      "link": "/documentation",
      "children": [
        {
          "text": "Getting started",
          "link": "/documentation/getting-started"
        }
      ]
    },
    {
      "text": "API Reference",
      "link": "/api-reference",
      "children": [
        {
          "text": "Data Types",
          "link": "/api-reference/04.data-types"
        },
        {
          "text": "Authentication",
          "link": "/api-reference/05.authentication"
        },
        {
          "text": "Shipments",
          "link": "/api-reference/06.shipments"
        },
        {
          "text": "Delivery options",
          "link": "/api-reference/08.delivery-options"
        },
        {
          "text": "Webhooks",
          "link": "/api-reference/10.webhooks"
        }
      ]
    },
    {
      "text": "Contact",
      "link": "/contact",
      "children": [
        {
          "text": "Join our Slack workspace",
          "link": "https://slack.com"
        }
      ]
    },
    {
      "text": "",
      "children": [
        {
          "text": "Status",
          "link": "https://status.myparcel.nl/"
        },
        {
          "text": "About",
          "link": "/about"
        },
        {
          "text": "Contact",
          "link": "/contact"
        },
        {
          "text": "Jobs",
          "link": "https://www.myparcel.nl/vacature/development/"
        },
        {
          "text": "GitHub",
          "link": "https://github.com/myparcelnl"
        },
        {
          "text": "MyParcel",
          "link": "https://www.myparcel.nl/"
        },
        {
          "text": "SendMyParcel",
          "link": "https://www.sendmyparcel.be/"
        },
        {
          "text": "Flespakket",
          "link": "https://www.flespakket.nl/"
        }
      ]
    }
  ],
  "footer2": [
    {
      "text": "Conditions & Policy",
      "link": "https://backoffice.myparcel.nl/static/myparcel-nederland/documentatie/voorwaarden/myparcel-algemene-voorwaarden-en.pdf?1650554031650"
    },
    {
      "text": "Cookie statement",
      "link": "https://backoffice.myparcel.nl/static/myparcel-nederland/documentatie/voorwaarden/myparcel-cookie-statement-en.pdf?1650554031650"
    },
    {
      "text": "Privacy statement",
      "link": "https://backoffice.myparcel.nl/static/myparcel-nederland/documentatie/voorwaarden/myparcel-privacy-statement-en.pdf?1650554031650"
    }
  ],
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "darkMode": true,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "sidebarDepth": 2,
  "editLinkText": "Edit this page",
  "lastUpdated": true,
  "lastUpdatedText": "Last Updated",
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
}
