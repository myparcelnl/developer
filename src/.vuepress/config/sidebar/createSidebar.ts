import { SidebarConfig } from '@mptheme/config.types';
import { createObjectSidebar } from './createObjectSidebar';
import path from 'path';

export const SRC_DIR = path.resolve(__dirname, '..', '..', '..');

export const HIDDEN: string[] = [
  'brands',
];

/**
 * Gets the sidebar and nav config from vuepress-bar and converts it to support VuePress 2.
 *
 * @param baseDir
 */
export function createSidebar(baseDir?: string): SidebarConfig {
  baseDir ??= SRC_DIR;

  const sidebar = createObjectSidebar(baseDir);

  console.log(sidebar);
  return sidebar;
}
