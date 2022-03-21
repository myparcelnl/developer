import { SidebarConfig } from '@mptheme/config.types';
import { createObjectSidebar } from './createObjectSidebar';
import path from 'path';

export const SRC_DIR = path.resolve(__dirname, '..', '..', '..');

export const HIDDEN: string[] = [
  'brands',
  'contact',
  'contributing',
  'integrations',
];

/**
 * Gets the sidebar and nav config from vuepress-bar and converts it to support VuePress 2.
 */
export const createSidebar = (baseDir?: string): SidebarConfig => {
  baseDir ??= SRC_DIR;

  return createObjectSidebar(baseDir);
};
