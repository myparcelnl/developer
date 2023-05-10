import {MyPaNavLink, MyPaNavbarConfigArray} from '@mptheme/config.types';

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
    link: '/integrations.html',
  },
  {
    text: 'Release notes',
    link: '/release-notes/',
  },
  {
    text: 'About',
    link: '/about.html',
  },
  {
    text: 'Contact',
    link: '/contact.html',
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
