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
          subtitle: Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
          link: /api-reference
      - component: HomeLink
        attributes: 
          class: 'bg-monstera-500' 
          title: Documentation.
          icon: documentation
          subtitle: Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
          link: /documentation
      - component: HomeLink
        attributes: 
          class: 'bg-goldfish-500' 
          title: Integrations.
          icon: integrations
          subtitle: Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
          link: /integrations

- title: Get the most out of our service.
  subtitle: Discover how our custom shipments implementation makes the difference for these clients.
  render:
    attributes:
      class: 'lg:grid-cols-4 sm:grid-cols-3 grid-cols-2'
    children:
      - component: HomePartnerBrand
        attributes:
          name: Zuivelhoeve
          logo: zuivelhoeve.png
          color: '#071F60'
          link: /partners/zuivelhoeve
      - component: HomePartnerBrand
        attributes:
          name: GrandVision
          logo: grand-vision.svg
          color: '#0057B8'
          link: /partners/grand-vision
      - component: HomePartnerBrand
        attributes:
          name: Vanilia
          logo: vanilia.png
          color: '#000000'
          link: /partners/vanilia
      - component: HomePartnerBrand
        attributes:
          name: Wolplein
          logo: wolplein.svg
          color: '#E32F82'
          link: /partners/wolplein
---
