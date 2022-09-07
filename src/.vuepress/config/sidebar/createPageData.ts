import { MyPaResolvedSidebarItem, MyPaSidebarConfig } from '@mptheme/config.types';
import { Language } from '../../plugins/parseTranslations/shared';
import { Page } from 'vuepress';
import { deepSet } from './deepSet';
import { get } from 'lodash-unified';

export const createPageData = (
  page: Page,
  languages: Language[],
  defaultLanguage: Language,
  pages: MyPaSidebarConfig,
): void => {
  const filteredSpots: string[] = page.path
    .replace('.html', '')
    .split('/')
    .filter(Boolean);

  const matchedLanguage = languages.find((language) => language.alpha2 === filteredSpots[0]);
  const langPath = matchedLanguage?.path ?? defaultLanguage?.path;
  const objectLangPath = langPath.replace(/^(\/\w+)\/$/, '$1');

  const spots = filteredSpots.filter((spot: string) => spot !== matchedLanguage?.alpha2);

  const finalSpots = [objectLangPath, '/' + (spots[0] ?? '')];

  if (spots.length > 1) {
    finalSpots.push('children');
    finalSpots.push(get(pages, finalSpots)?.length?.toString() ?? '0');
  }

  const navItem: MyPaResolvedSidebarItem = {
    text: page.title,
    link: page.path,
  };

  if (spots.length > (matchedLanguage ? 3 : 2)) {
    navItem.collapsible = true;
  }

  page.lang = matchedLanguage?.locale ?? page.lang;
  page.routeMeta ??= {};
  page.routeMeta.hierarchy = finalSpots.filter((spot) => spot.startsWith('/'));

  Object
    .entries(navItem)
    .forEach(([key, value]) => {
      deepSet(pages, [...finalSpots, key], value);
    });
};
