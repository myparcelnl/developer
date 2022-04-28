import { ComputedRef, computed } from 'vue';
import { isLinkHttp, isLinkMailto, isLinkTel } from '@vuepress/shared';
import { NavLink } from '@vuepress/theme-default/lib/shared';
import { useNavLink } from '@vuepress/theme-default/lib/client/composables';

interface UseLink {
  hasHttpProtocol: ComputedRef<boolean>;
  hasNonHttpProtocol: ComputedRef<boolean>;
  isBlankTarget: ComputedRef<boolean>;
  isRouterLink: ComputedRef<boolean>;
  linkAriaLabel: ComputedRef<string>;
  linkRel: ComputedRef<string | undefined>;
  linkTarget: ComputedRef<string | undefined>;
}

/**
 *
 */
export function useLink(link: NavLink | string): UseLink {
  let linkItem: NavLink;

  if (typeof link === 'string') {
    linkItem = useNavLink(link);
  } else {
    linkItem = link;
  }

  const hasNonHttpProtocol = computed(
    () => isLinkMailto(linkItem.link) || isLinkTel(linkItem.link),
  );
  const hasHttpProtocol = computed(() => isLinkHttp(linkItem.link));

  const linkTarget = computed(() => {
    if (hasNonHttpProtocol.value) {
      return undefined;
    }

    if (linkItem.target) {
      return linkItem.target;
    }

    if (hasHttpProtocol.value) {
      return '_blank';
    }

    return undefined;
  });
  const isBlankTarget = computed(() => linkTarget.value === '_blank');
  const isRouterLink = computed(() => !hasHttpProtocol.value && !hasNonHttpProtocol.value && !isBlankTarget.value);
  const linkAriaLabel = computed(() => linkItem.ariaLabel ?? linkItem.text);

  const linkRel = computed(() => {
    if (hasNonHttpProtocol.value) {
      return undefined;
    }

    if (linkItem.rel) {
      return linkItem.rel;
    }

    if (isBlankTarget.value) {
      return 'noopener noreferrer';
    }

    return undefined;
  });

  return {
    hasHttpProtocol,
    hasNonHttpProtocol,
    isBlankTarget,
    isRouterLink,
    linkAriaLabel,
    linkRel,
    linkTarget,
  };
}
