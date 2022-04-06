import { ROUTES } from '../routes';
import { SRC_DIR } from './createSidebar';
import { SidebarConfigArray } from '@mptheme/config.types';
import { getVuePressBarConfig } from './getVuePressBarConfig';
import path from 'path';
import { transformSidebar } from './transformSidebar';

/**
 * @param baseDir
 * @param dir
 * @param depth
 */
export function createArraySidebar(baseDir: string, depth: number = 0) {
  const { sidebar } = getVuePressBarConfig(baseDir);
  const sidebarV2: SidebarConfigArray = transformSidebar(sidebar, path.relative(SRC_DIR, baseDir));
  const basename = path.basename(baseDir);
  const title = ROUTES.find((route) => route.link.slice(1) === basename);

  return [
    {
      text: title?.text ?? basename,
      children: sidebarV2,
    },
  ];
}
