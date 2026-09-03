import {type Page} from 'vuepress';
import {type MyPaResolvedSidebarItem, type MyPaSidebarConfig} from '@mptheme/config.types';
import {type Language} from '../../plugins/parseTranslations/shared';
import {deepSet} from './deepSet';
import {calculateSidebarItemSpots} from './calculateSidebarItemSpots';

export const addPageToSidebar = (
  page: Page,
  languages: Language[],
  defaultLanguage: Language,
  sidebar: MyPaSidebarConfig,
): void => {
  const filteredSpots: string[] = page.path.replace('.html', '').split('/').filter(Boolean);

  const matchedLanguage = languages.find((language) => language.alpha2 === filteredSpots[0]);
  const langPath = matchedLanguage?.path ?? defaultLanguage?.path;
  const objectLangPath = langPath.replace(/^(\/\w+)\/$/, '$1');

  const spots = filteredSpots.filter((spot: string) => spot !== matchedLanguage?.alpha2);

  const finalSpots = calculateSidebarItemSpots(objectLangPath, spots, sidebar);

  page.lang = matchedLanguage?.locale ?? page.lang;
  page.routeMeta ??= {};
  page.routeMeta.hierarchy = finalSpots.filter((spot) => spot.startsWith('/'));

  const navItem: MyPaResolvedSidebarItem = {
    text: page.title,
    link: page.path,
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
    collapsible: spots.length > (matchedLanguage ? 3 : 2),
  };

  Object.entries(navItem).forEach(([key, value]) => {
    deepSet(sidebar, [...finalSpots, key], value);
  });
};
