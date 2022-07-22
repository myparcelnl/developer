import { MyPaSidebarConfigArray, MyPaSidebarGroupCollapsible } from '@mptheme/config.types';

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
        newChild.collapsible = true;
      }

      return newChild;
    });
}
