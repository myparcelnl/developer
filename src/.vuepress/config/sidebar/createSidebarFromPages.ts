import {type Page} from 'vuepress';
import {type MyPaSidebarConfig} from '@mptheme/config.types';
import {type Language} from '../../plugins/parseTranslations/shared';
import {addPageToSidebar} from './addPageToSidebar';

export const createSidebarFromPages = (
  pages: Page[],
  languages: Language[],
  defaultLanguage: Language,
): MyPaSidebarConfig => {
  const sidebar: MyPaSidebarConfig = {};

  pages
    .sort((pageA, pageB) => pageA.path.localeCompare(pageB.path))
    .forEach((page) => {
      addPageToSidebar(page, languages, defaultLanguage, sidebar);
    });

  return sidebar;
};
