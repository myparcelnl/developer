import { MyPaSidebarConfigArray, MyPaSidebarGroupCollapsible } from '@mptheme/config.types';
// noinspection ES6PreferShortImport
import { isOfType } from '../../theme/shared/utils';

/**
 * Loop through a v1 sidebar to transform it into a v2 compatible one.
 *
 * @param children
 * @param baseDir
 * @param depth
 */
export function transformSidebar(
  children: SidebarV1ConfigArray,
  baseDir: string,
  depth = 0,
): MyPaSidebarConfigArray {
  return children
    .filter(Boolean)
    .map((child): MyPaSidebarGroupCollapsible | string => {
      if (typeof child === 'string') {
        return `/${baseDir}/${child}`;
      }

      const newChild = child as MyPaSidebarGroupCollapsible;

      if ('children' in child && child.children) {
        newChild.children = transformSidebar(child.children, baseDir, depth + 1).filter(Boolean);
      }

      if (child.hasOwnProperty('title')) {
        newChild.text = child.title ?? '';
        delete child.title;
      }

      if (child.hasOwnProperty('collapsable')) {
        newChild.collapsible = child.collapsable;
        delete child.collapsable;
      }

      if (depth === 0) {
        if (newChild?.children?.[0] && typeof newChild.children[0] === 'string') {
          const regExpExecArray = (/^\/[a-z]{2}\//).exec(newChild.children[0]);

          if (regExpExecArray) {
            newChild.children.forEach((child) => {
              if (isOfType<MyPaSidebarGroupCollapsible>(child, 'text')) {
                child.collapsible = true;
              }
            });
            return newChild;
          }
        }

        newChild.collapsible = true;
      }

      return newChild;
    });
}
