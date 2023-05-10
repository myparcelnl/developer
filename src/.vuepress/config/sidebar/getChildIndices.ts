import {MyPaSidebarConfig} from '@mptheme/config.types';
import {get} from 'lodash-unified';

const KEY_CHILDREN = 'children';

export const getChildIndices = (sidebar: MyPaSidebarConfig, spots: string[], rest: string[]): string[] => {
  const parent = [...spots, KEY_CHILDREN];
  const index: number = get(sidebar, parent, [])?.length ?? 0;

  if (rest.length > 1) {
    const parentIndex = (index - 1).toString();

    const childIndices = getChildIndices(sidebar, [...spots, KEY_CHILDREN, parentIndex], rest.slice(1));

    return [KEY_CHILDREN, parentIndex, ...childIndices];
  }

  return [KEY_CHILDREN, index.toString()];
};
