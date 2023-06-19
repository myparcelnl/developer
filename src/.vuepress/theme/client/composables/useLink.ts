import {ComputedRef, Ref, computed, ref} from 'vue';
import {isLinkHttp, isLinkMailto, isLinkTel} from '@vuepress/shared';
import {MaybeRef} from '@vueuse/core';
import {MyPaAnySidebarItem, MyPaNavLink} from '@mptheme/config.types';
import {isOfType} from '@mptheme/shared/utils';
import {memoize} from 'lodash-unified';
import {useNavLink} from '@mptheme/client/composables/useNavLink';

interface UseLink {
  linkItem: ComputedRef<MyPaNavLink | MyPaAnySidebarItem>;
  hasHttpProtocol: ComputedRef<boolean>;
  hasNonHttpProtocol: ComputedRef<boolean>;
  isBlankTarget: ComputedRef<boolean>;
  isRouterLink: ComputedRef<boolean>;
  linkAriaLabel: ComputedRef<string>;
  linkRel: ComputedRef<string | undefined>;
  linkTarget: ComputedRef<string | undefined>;
}

// eslint-disable-next-line max-lines-per-function
const useMemoized = memoize((link: Ref<string | MyPaNavLink | MyPaAnySidebarItem>): UseLink => {
  const linkItem = computed(() => {
    if (typeof link.value === 'string') {
      const item = useNavLink(link.value.replace(/\/$/, ''));

      if (!item.link.endsWith('.html') && !['#', '?', '&'].some((i) => item.link.includes(i))) {
        item.link += '/';
      }

      return item;
    } else if (isOfType<MyPaNavLink>(link.value, 'link')) {
      return link.value;
    }

    return {
      link: '',
      text: '',
    };
  });

  const hasNonHttpProtocol = computed(() => isLinkMailto(linkItem.value.link) || isLinkTel(linkItem.value.link));
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

export const useLink = (link: MaybeRef<MyPaNavLink | MyPaAnySidebarItem | string>): UseLink => useMemoized(ref(link));
