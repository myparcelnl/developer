<template>
  <RouterLink
    v-if="isRouterLink"
    :class="{ 'router-link-active': isActive }"
    :to="item.link"
    :aria-label="linkAriaLabel">
    <slot>
      <span v-text="item.text" />
    </slot>
  </RouterLink>

  <a
    v-else
    :href="item.link"
    :rel="linkRel"
    :target="linkTarget"
    :aria-label="linkAriaLabel">
    <slot>
      <span v-text="item.text" />
      <ExternalLinkIcon v-if="isBlankTarget" />
    </slot>
  </a>
</template>

<script lang="ts">
import { PropType, computed, defineComponent } from 'vue';
import { isLinkHttp, isLinkMailto, isLinkTel } from '@vuepress/shared';
import { NavLink } from '@vuepress/theme-default/lib/shared';
import { useRouter } from 'vue-router';
import { useSiteData } from '@vuepress/client';

export default defineComponent({
  name: 'AutoLink',

  props: {
    item: {
      type: Object as PropType<NavLink>,
      required: true,
    },
  },

  setup: (props) => {
    const route = useRouter().currentRoute.value;
    const site = useSiteData();

    // if the link has non-http protocol
    const hasNonHttpProtocol = computed(
      () => isLinkMailto(props.item.link) || isLinkTel(props.item.link),
    );
    // if the link has http protocol
    const hasHttpProtocol = computed(() => isLinkHttp(props.item.link));

    // resolve the `target` attr
    const linkTarget = computed(() => {
      if (hasNonHttpProtocol.value) {
        return undefined;
      }

      if (props.item.target) {
        return props.item.target;
      }

      if (hasHttpProtocol.value) {
        return '_blank';
      }

      return undefined;
    });
    const isBlankTarget = computed(() => linkTarget.value === '_blank');
    const isRouterLink = computed(() => !hasHttpProtocol.value && !hasNonHttpProtocol.value && !isBlankTarget.value);
    const linkAriaLabel = computed(() => props.item.ariaLabel || props.item.text);

    const linkRel = computed(() => {
      if (hasNonHttpProtocol.value) {
        return undefined;
      }

      if (props.item.rel) {
        return props.item.rel;
      }

      if (isBlankTarget.value) {
        return 'noopener noreferrer';
      }

      return undefined;
    });

    const shouldBeActiveInSubpath = computed(() => {
      const localeKeys = Object.keys(site.value.locales);

      if (localeKeys.length) {
        return !localeKeys.some((key) => key === props.item.link);
      }

      return props.item.link !== '/';
    });

    const isActiveInSubpath = computed(() => {
      if (!shouldBeActiveInSubpath.value) {
        return false;
      }

      return route.path.startsWith(props.item.link);
    });

    // if this link is active
    const isActive = computed(() => {
      if (!isRouterLink.value) {
        return false;
      }

      if (props.item.activeMatch) {
        return new RegExp(props.item.activeMatch).test(route.path);
      }

      return isActiveInSubpath.value;
    });

    return {
      isActive,
      isBlankTarget,
      isRouterLink,
      linkAriaLabel,
      linkRel,
      linkTarget,
    };
  },
});
</script>
