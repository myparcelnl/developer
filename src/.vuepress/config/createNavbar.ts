import { ABOUT, API_REFERENCE, CONTACT, DOCUMENTATION, INTEGRATIONS, STATUS } from './routes';
import { MyPaNavLink, MyPaNavbarConfigArray } from '@mptheme/config.types';

const pages: MyPaNavLink[] = [
  API_REFERENCE,
  DOCUMENTATION,
  INTEGRATIONS,
  ABOUT,
  CONTACT,
  STATUS,
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
