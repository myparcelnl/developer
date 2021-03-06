import { MyPaAnySidebarItem, MyPaSidebarConfig } from '@mptheme/config.types';
import { HIDDEN } from './createSidebar';
import { createArraySidebar } from './createArraySidebar';
import fs from 'fs';
import path from 'path';

export const createObjectSidebar = (baseDir: string): MyPaSidebarConfig => {
  const dirs = fs
    .readdirSync(baseDir)
    .filter((file) => !file.startsWith('.') && fs.lstatSync(path.resolve(baseDir, file)).isDirectory());

  return dirs
    .filter((dir) => !HIDDEN.includes(dir))
    .reduce((acc, dir): MyPaAnySidebarItem => {
      const nextBaseDir = path.resolve(baseDir, dir);

      return {
        ...acc,
        [`/${dir}`]: createArraySidebar(nextBaseDir),
      };
    }, {});
};
