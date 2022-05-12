import { ComputedRef, computed } from 'vue';
import { isLinkHttp, isLinkMailto, isLinkTel } from '@vuepress/shared';
import { NavLink } from '@vuepress/theme-default/lib/shared';
import { isOfType } from '@mptheme/client/utils/type-guard/isOfType';
import { memoize } from 'lodash-es';
import { useNavLink } from '@vuepress/theme-default/lib/client/composables';

interface UseLink {
  linkItem: ComputedRef<NavLink>;
  hasHttpProtocol: ComputedRef<boolean>;
  hasNonHttpProtocol: ComputedRef<boolean>;
  isBlankTarget: ComputedRef<boolean>;
  isRouterLink: ComputedRef<boolean>;
  linkAriaLabel: ComputedRef<string>;
  linkRel: ComputedRef<string | undefined>;
  linkTarget: ComputedRef<string | undefined>;
}

const useMemoized = memoize((link: string | NavLink): UseLink => {
  const linkItem = computed(() => {
    if (typeof link === 'string') {
      const item = useNavLink(link.replace(/\/$/, ''));

      if (!item.link.endsWith('.html')) {
        item.link += '/';
      }

      return item;
    } else if (isOfType<NavLink>(link, 'link')) {
      return link;
    }

    return {
      link: '',
      text: '',
    };
  });

  const hasNonHttpProtocol = computed(
    () => isLinkMailto(linkItem.value.link) || isLinkTel(linkItem.value.link),
  );
  const hasHttpProtocol = computed(() => isLinkHttp(linkItem.value.link));

  const linkTarget = computed(() => {
    if (hasNonHttpProtocol.value) {
      return undefined;
    }

    if (linkItem.value.target) {
      return linkItem.value.target;
    }

    if (hasHttpProtocol.value) {
      return '_blank';
    }

    return undefined;
  });
  const isBlankTarget = computed(() => linkTarget.value === '_blank');
  const isRouterLink = computed(() => !hasHttpProtocol.value && !hasNonHttpProtocol.value && !isBlankTarget.value);
  const linkAriaLabel = computed(() => linkItem.value.ariaLabel ?? linkItem.value.text);

  const linkRel = computed(() => {
    if (hasNonHttpProtocol.value) {
      return undefined;
    }

    if (linkItem.value.rel) {
      return linkItem.value.rel;
    }

    if (isBlankTarget.value) {
      return 'noopener noreferrer';
    }

    return undefined;
  });

  return {
    linkItem,
    hasHttpProtocol,
    hasNonHttpProtocol,
    isBlankTarget,
    isRouterLink,
    linkAriaLabel,
    linkRel,
    linkTarget,
  };
});

/**
 *
 */
export function useLink(link: NavLink | string): UseLink {
  return useMemoized(link);
}
