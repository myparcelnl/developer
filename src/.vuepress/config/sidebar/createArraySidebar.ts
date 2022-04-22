import { ROUTES } from '../routes';
import { SRC_DIR } from './createSidebar';
import { SidebarConfigArray } from '@mptheme/config.types';
import { getVuePressBarConfig } from './getVuePressBarConfig';
import path from 'path';
import { transformSidebar } from './transformSidebar';

export const createArraySidebar = (baseDir: string): SidebarConfigArray => {
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
};
