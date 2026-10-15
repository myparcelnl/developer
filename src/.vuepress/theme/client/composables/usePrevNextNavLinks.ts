import {isPlainObject, isString} from 'vuepress/shared';
import {usePageFrontmatter} from 'vuepress/client';
import {useRoute} from 'vue-router';
import {type ComputedRef, computed} from 'vue';
import {type AutoLinkOptions} from '@vuepress/theme-default';
import {type MyPaPageFrontmatter, type MyPaResolvedSidebarItem} from '@mptheme/config.types';
import {useNavLink} from '@mptheme/client/composables/useNavLink';
import {useSidebarItems} from '@mptheme/client/composables/sidebar';

/**
 * Resolve `prev` or `next` config from frontmatter.
 *
 * @param conf
 */
const resolveFromFrontmatterConfig = (conf: unknown): null | false | AutoLinkOptions => {
  if (conf === false) {
    return null;
  }

  if (isString(conf)) {
    return useNavLink(conf);
  }

  if (isPlainObject<AutoLinkOptions>(conf)) {
    return conf;
  }

  return false;
};

/**
 * Resolve `prev` or `next` config from sidebar items.
 *
 * @param sidebarItems
 * @param currentPath
 * @param offset
 */
const resolveFromSidebarItems = (
  sidebarItems: MyPaResolvedSidebarItem[],
  currentPath: string,
  offset: number,
): null | AutoLinkOptions => {
  const index = sidebarItems.findIndex((item) => item.link === currentPath);

  if (index !== -1) {
    const targetItem = sidebarItems[index + offset];

    if (!targetItem?.link) {
      return null;
    }

    return targetItem as AutoLinkOptions;
  }

  for (const item of sidebarItems) {
    if (item.children) {
      const childResult = resolveFromSidebarItems(item.children, currentPath, offset);

      if (childResult) {
        return childResult;
      }
    }
  }

  return null;
};

export const usePrevNextNavLinks = (): {
  prevNavLink: ComputedRef<null | AutoLinkOptions>;
  nextNavLink: ComputedRef<null | AutoLinkOptions>;
} => {
  const frontmatter = usePageFrontmatter<MyPaPageFrontmatter>();
  const sidebarItems = useSidebarItems();
  const route = useRoute();

  return {
    prevNavLink: computed(() => {
      const prevConfig = resolveFromFrontmatterConfig(frontmatter.value.prev);

      if (prevConfig !== false) {
        return prevConfig;
      }

      return resolveFromSidebarItems(sidebarItems.value, route.path, -1);
    }),

    nextNavLink: computed(() => {
      const nextConfig = resolveFromFrontmatterConfig(frontmatter.value.next);

      if (nextConfig !== false) {
        return nextConfig;
      }

      return resolveFromSidebarItems(sidebarItems.value, route.path, 1);
    }),
  };
};
