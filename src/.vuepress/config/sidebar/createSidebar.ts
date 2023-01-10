import {App} from 'vuepress';
import {Language} from '../../plugins/parseTranslations/shared';
import {MyPaSidebarConfig} from '@mptheme/config.types';
import {createPageData} from './createPageData';

/**
 * Gets the sidebar and nav config from vuepress-bar and converts it to support VuePress 2.
 */
export const createSidebar = (app: App): MyPaSidebarConfig => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const languages = app.siteData.availableLanguages as Language[];
  const defaultLanguage: Language = languages[0];

  const pages: MyPaSidebarConfig = {};

  app.pages.forEach((page) => {
    createPageData(page, languages, defaultLanguage, pages);
  });

  return pages;
};
