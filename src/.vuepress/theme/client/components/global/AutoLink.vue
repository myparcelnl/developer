<template>
  <RouterLink
    v-if="isRouterLink"
    :class="{
      'router-link-active': isActive,
      'dark:text-inherit text-inherit': inheritColor,
    }"
    :to="linkItem.link"
    :aria-label="linkAriaLabel">
    <slot>
      <span v-text="item.text" />
    </slot>
  </RouterLink>

  <a
    v-else
    :href="linkItem.link"
    :rel="linkRel"
    :target="linkTarget"
    :aria-label="linkAriaLabel">
    <slot>
      <span v-text="item.text" />
    </slot>
    <ExternalLinkIcon v-if="isBlankTarget" />
  </a>
</template>

<script lang="ts">
import { PropType, computed, defineComponent } from 'vue';
import { NavLink } from '@vuepress/theme-default/lib/shared';
import { useLink } from '@mptheme/client/composables/useLink';
import { useRouter } from 'vue-router';
import { useSiteData } from '@vuepress/client';

export default defineComponent({
  name: 'AutoLink',

  props: {
    item: {
      type: [String, Object] as PropType<string | NavLink>,
      required: true,
    },

    inheritColor: {
      type: Boolean,
    },
  },

  setup: (props) => {
    const {
      linkItem,
      linkTarget,
      isRouterLink,
      linkAriaLabel,
      linkRel,
      isBlankTarget,
    } = useLink(props.item);
    const route = useRouter().currentRoute.value;
    const site = useSiteData();

    const shouldBeActiveInSubpath = computed(() => {
      const localeKeys = Object.keys(site.value.locales);

      if (localeKeys.length) {
        return !localeKeys.some((key) => key === linkItem.link);
      }

      return linkItem.link !== '/';
    });

    const isActiveInSubpath = computed(() => {
      if (!shouldBeActiveInSubpath.value) {
        return false;
      }

      return route.path.startsWith(linkItem.link);
    });

    // if this link is active
    const isActive = computed(() => {
      if (!isRouterLink.value) {
        return false;
      }

      if (linkItem.activeMatch) {
        return new RegExp(linkItem.activeMatch).test(route.path);
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
      linkItem,
    };
  },
});
</script>