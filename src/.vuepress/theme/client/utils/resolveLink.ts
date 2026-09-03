import {type Router, useRouter} from 'vue-router';
import {memoize} from 'lodash-unified';
import {type MyPaNavLink} from '@mptheme/config.types';

let routes: ReturnType<Router['getRoutes']>;

const resolveLinkMemoized = memoize((navLink: MyPaNavLink) => {
  routes ??= useRouter()
    .getRoutes()
    .filter((route) => !route.path.endsWith('.md') && !route.path.endsWith('.html'));
  const {link} = navLink;

  const searchLink = link.replace('.html', '').replace(/\/$/, '');

  const variants: string[] = [searchLink, `${searchLink}/`];

  const matchingRoute = routes.find((route) => variants.includes(route.path));

  if (matchingRoute) {
    if (typeof matchingRoute.redirect === 'string') {
      navLink.link = matchingRoute.redirect;
    } else if (matchingRoute.path) {
      navLink.link = matchingRoute.path;
    }

    return navLink;
  }

  return undefined;
});

export const resolveLink = (navLink: MyPaNavLink): undefined | MyPaNavLink => resolveLinkMemoized(navLink);
