import {type App} from 'vuepress';
import {type MyPaSidebarConfig} from '@mptheme/config.types';
import {type Language} from '../../plugins/parseTranslations/shared';
import {createSidebarFromPages} from './createSidebarFromPages';

export const createSidebar = (app: App): MyPaSidebarConfig => {
  // @ts-expect-error property does exist
  const languages = app.siteData.availableLanguages as Language[];
  const [defaultLanguage] = languages;

  return createSidebarFromPages(app.pages, languages, defaultLanguage);
};
