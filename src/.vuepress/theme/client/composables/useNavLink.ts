import {MyPaNavLink} from '@mptheme/config.types';
import {useResolveRouteWithRedirect} from '@mptheme/client/composables';

/**
 * Resolve NavLink props from string.
 *
 * @example
 * - Input: '/README.md'
 * - Output: { text: 'Home', link: '/' }
 */
export const useNavLink = (item: string): MyPaNavLink => {
  const resolved = useResolveRouteWithRedirect(encodeURI(item));

  return {
    text: resolved.meta.title ?? item,
    link: resolved.name === '404' ? item : resolved.fullPath,
  };
};
