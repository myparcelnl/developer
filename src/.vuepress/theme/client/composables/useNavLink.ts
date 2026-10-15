import {resolveRoute} from 'vuepress/client';
import {type MyPaNavLink} from '@mptheme/config.types';

/**
 * Resolve NavLink props from string.
 *
 * @example
 * - Input: '/README.md'
 * - Output: { text: 'Home', link: '/' }
 *
 * @param item - Link to resolve.
 * @param currentPath - Path that relative links, hashes and queries resolve against.
 */
export const useNavLink = (item: string, currentPath?: string): MyPaNavLink => {
  // a hash or query on its own belongs to the current page
  const path = currentPath && /^[#?]/.test(item) ? `${currentPath}${item}` : item;
  // vue-router matched paths with and without trailing slash, resolveRoute does not
  const variants = [path, path.endsWith('/') ? path.slice(0, -1) : `${path}/`];
  const resolved = variants
    .map((variant) => resolveRoute<{title?: string}>(variant, currentPath))
    .find((route) => !route.notFound);

  if (!resolved) {
    return {text: item, link: item};
  }

  return {
    text: resolved.meta.title ?? item,
    link: resolved.path,
  };
};
