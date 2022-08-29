import { MyPaNavLink } from '@mptheme/config.types';
import { resolveLink } from '@mptheme/client/utils/resolveLink';

export const resolveLinks = (links: MyPaNavLink[]): MyPaNavLink[] => {
  return links.reduce((acc, child) => {
    const resolved = resolveLink(child);

    if (resolved) {
      acc.push(resolved);
    }

    return acc;
  }, [] as MyPaNavLink[]);
};
