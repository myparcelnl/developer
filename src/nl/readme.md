---
home: true
sidebar: none

title: Ga Beyond Delivery met MyParcel.
subtitle: Verbind met onze API en ga aan de slag met zendingen, retouren en meer.

actions:
  - title: Aan de slag
    link: /nl/aan-de-slag.html
  - title: Contact
    variant: outlineLight
    link: /contact.html

tree:
  - title: Explore.
    render:
      attributes:
        class: 'lg:grid-cols-3 sm:grid-cols-2 grid-cols-1'
      children:
        - component: HomeLink
          attributes:
            class: 'bg-monstera-800'
            title: API reference.
            icon: api-reference
            subtitle: Hier vind je alles wat je nodig hebt om aan de slag te kunnen met onze API.
            link: /api-reference/
        - component: HomeLink
          attributes:
            class: 'bg-monstera-600'
            title: Documentatie.
            icon: documentation
            subtitle: Handleidingen voor onze plugins en integraties.
            link: /nl/documentatie/
        - component: HomeLink
          attributes:
            class: 'bg-goldfish-600'
            title: Integraties.
            icon: integrations
            subtitle: Hier vind je onze integraties met allerlei platformen en tools.
            link: /nl/integraties.html

  - title: Haal het meeste uit onze service.
    subtitle: Deze klanten gebruiken een custom implementatie om hun MyParcel zendingen te beheren.
    render:
      attributes:
        class: 'lg:grid-cols-4 sm:grid-cols-3 grid-cols-2'
      children:
        - component: HomePartnerBrand
          attributes:
            name: Zuivelhoeve
            logo: zuivelhoeve.png
            color: '#071F60'
            link: https://www.zuivelhoeve.nl/
        - component: HomePartnerBrand
          attributes:
            name: GrandVision
            logo: grand-vision.svg
            color: '#0057B8'
            link: https://www.grandvision.com/
        - component: HomePartnerBrand
          attributes:
            name: Vanilia
            logo: vanilia.png
            color: '#000000'
            link: https://vanilia.com/
        - component: HomePartnerBrand
          attributes:
            name: Verstegen
            logo: verstegen.png
            color: '#007a53'
            link: https://www.verstegen.nl/
---
