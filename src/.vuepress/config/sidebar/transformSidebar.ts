import { SidebarConfigArray, SidebarGroupCollapsible } from '@mptheme/config.types';

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
  depth: number = 0,
): SidebarConfigArray {
  return children
    .filter(Boolean)
    .map((child): SidebarGroupCollapsible | string => {
      if (typeof child === 'string') {
        return `/${baseDir}/${child}`;
      }

      const newChild = child as SidebarGroupCollapsible;

      if ('children' in child && child.children) {
        newChild.children = transformSidebar(child.children, baseDir, depth + 1).filter(Boolean);

        // if (!newChild.link && typeof child.children[0] === 'string') {
        //   newChild.link = child.children[0];
        //   newChild.children = newChild.children.slice(1);
        // }
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
