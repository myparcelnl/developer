import { MyPaNavLink, MyPaNavbarConfigArray } from '@mptheme/config.types';

const pages: MyPaNavLink[] = [
  {
    text: 'API Reference',
    link: '/api-reference/',
  },
  {
    text: 'Documentation',
    link: '/documentation/',
  },
  {
    text: 'Integrations',
    link: '/integrations/',
  },
  {
    text: 'About',
    link: '/about/',
  },
  {
    text: 'Contact',
    link: '/contact/',
  },
  {
    text: 'Status',
    link: 'https://status.myparcel.nl/',
  },
];

export const createNavbar = (prefix?: string): MyPaNavbarConfigArray => {
  if (!prefix) {
    return pages;
  }

  return pages.map((element) => {
    if (element?.multilanguage === true) {
      return {
        ...element,
        link: prefix + element.link,
      };
    }

    return element;
  });
};
