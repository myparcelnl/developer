import {useRoute} from 'vue-router';
import {resolveLocalePath} from '@vuepress/shared';
import {type MyPaResolvedSidebarItem, type MyPaSidebarConfigObject, type MyPaSiteData} from '@mptheme/config.types';
import {resolveArraySidebarItems} from './resolveArraySidebarItems';

/**
 * Resolve sidebar items if the config is a key -> value (path-prefix -> array) object.
 */
export const resolveMultiSidebarItems = (
  siteData: MyPaSiteData,
  sidebarConfig: MyPaSidebarConfigObject,
  sidebarDepth: number,
): MyPaResolvedSidebarItem[] => {
  const currentLangPath =
    siteData.availableLanguages.find((lang) => lang.localeShort === siteData.lang)?.path?.replace(/(\/\w+)\/$/, '$1') ??
    '/';

  const languageSidebar = sidebarConfig?.[currentLangPath] ?? {};

  const route = useRoute();
  const routePath = currentLangPath.length > 1 ? route.path.replace(currentLangPath, '') : route.path;

  const sidebarPath = resolveLocalePath(languageSidebar, routePath);
  const matched = (languageSidebar[sidebarPath] ?? {}) as MyPaResolvedSidebarItem;

  return resolveArraySidebarItems(
    [
      {
        text: matched?.text,
        link: matched?.link,
        children: matched?.children,
      },
    ],
    sidebarDepth,
  );
};
