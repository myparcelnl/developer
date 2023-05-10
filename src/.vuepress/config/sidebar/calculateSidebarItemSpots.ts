import { MyPaSidebarConfig } from '@mptheme/config.types';
import { getChildIndices } from './getChildIndices';

export const calculateSidebarItemSpots = (
  objectLangPath: string,
  spots: string[],
  sidebar: MyPaSidebarConfig,
): string[] => {
  const [first, ...rest] = spots;

  const finalSpots: string[] = [objectLangPath];

  if (first) {
    finalSpots.push(`/${first}`);
  }

  if (spots.length <= 1) {
    return finalSpots;
  }

  return [...finalSpots, ...getChildIndices(sidebar, finalSpots, rest)];
};
