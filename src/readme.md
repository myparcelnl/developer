---
home: true
sidebar: none

title: Go Beyond Delivery with MyParcel.
subtitle: Connect with our API and get started with shipments, returns and more.

actions: 
- title: Get started
  link: /getting-started
- title: Contact us
  variant: outlineLight
  link: /contact

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
          subtitle: Here you will find everything you need to successfully communicate with our API.
          link: /api-reference
      - component: HomeLink
        attributes: 
          class: 'bg-monstera-500' 
          title: Documentation.
          icon: documentation
          subtitle: In-depth guides on all our plugins, SDKs and more.
          link: /documentation
      - component: HomeLink
        attributes: 
          class: 'bg-goldfish-500' 
          title: Integrations.
          icon: integrations
          subtitle: This is where you can find our integrations with various external services and platforms.
          link: /integrations

- title: Get the most out of our service.
  subtitle: These customers are using a custom implementation for managing their MyParcel shipments.
  render:
    attributes:
      class: 'lg:grid-cols-4 sm:grid-cols-3 grid-cols-2'
    children:
      - component: HomePartnerBrand
        attributes:
          name: Zuivelhoeve
          logo: zuivelhoeve.png
          color: '#071F60'
          link: https://www.grandvision.com/
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
          name: Wolplein
          logo: wolplein.svg
          color: '#E32F82'
          link: https://www.wolplein.nl/
---
