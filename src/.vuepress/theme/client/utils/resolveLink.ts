import {resolveRoute} from 'vuepress/client';
import {memoize} from 'lodash-unified';
import {type MyPaNavLink} from '@mptheme/config.types';

const resolveLinkMemoized = memoize((navLink: MyPaNavLink) => {
  const {link} = navLink;

  const searchLink = link.replace('.html', '').replace(/\/$/, '');

  const variants: string[] = [searchLink, `${searchLink}/`];

  const matchingRoute = variants.map((variant) => resolveRoute(variant)).find((route) => !route.notFound);

  if (matchingRoute) {
    navLink.link = matchingRoute.path;

    return navLink;
  }

  return undefined;
});

export const resolveLink = (navLink: MyPaNavLink): undefined | MyPaNavLink => resolveLinkMemoized(navLink);
