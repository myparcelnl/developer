<template>
  <RouterLink
    v-if="isRouterLink"
    :class="{
      'dark:text-inherit text-inherit': inheritColor,
    }"
    :to="linkItem.link"
    :aria-label="linkAriaLabel">
    <slot>
      <span v-text="item.text ?? text" />
    </slot>
  </RouterLink>

  <a
    v-else
    :href="linkItem.link"
    :rel="linkRel"
    :target="linkTarget"
    :aria-label="linkAriaLabel">
    <slot>
      <span v-text="item.text ?? text" />
      <ExternalLinkIcon
        v-if="isBlankTarget"
        class="ml-0.5" />
    </slot>
  </a>
</template>

<script lang="ts">
import {useRouter} from 'vue-router';
import {computed, defineComponent, type PropType, toRefs} from 'vue';
import {get} from '@vueuse/core';
import {type NavLink} from '@vuepress/theme-default/lib/shared/nav';
import {useSiteData} from '@vuepress/client';
import {type MyPaNavLink, type MyPaSidebarItem} from '@mptheme/config.types';
import {useLink} from '@mptheme/client/composables/useLink';
import {isOfType} from '../../../shared/utils';

export default defineComponent({
  name: 'AutoLink',

  props: {
    item: {
      type: [String, Object] as PropType<string | MyPaNavLink | MyPaSidebarItem>,
      required: true,
    },

    inheritColor: {
      type: Boolean,
    },

    /**
     * Override the text content. Only works if default slot is not used.
     */
    text: {
      type: String,
      default: null,
    },
  },

  setup: (props) => {
    const propRefs = toRefs(props);

    const {linkItem, linkTarget, isRouterLink, linkAriaLabel, linkRel, isBlankTarget} = useLink(propRefs.item);
    const route = useRouter().currentRoute.value;
    const site = useSiteData();

    const shouldBeActiveInSubpath = computed(() => {
      const localeKeys = Object.keys(site.value.locales);

      if (localeKeys.length) {
        return !localeKeys.some((key) => key === linkItem.value.link);
      }

      return linkItem.value.link !== '/';
    });

    const isActiveInSubpath = computed(() => {
      const {link} = get(linkItem);

      const resolvedLink: undefined | string = typeof link === 'function' ? link(route.path) : link;

      return (
        !shouldBeActiveInSubpath.value || (linkItem.value.link && resolvedLink && route.path.startsWith(resolvedLink))
      );
    });

    const isActive = computed(() => {
      if (!isRouterLink.value) {
        return false;
      }

      if (isOfType<NavLink>(linkItem.value, 'activeMatch') && linkItem.value.activeMatch) {
        return new RegExp(linkItem.value.activeMatch).test(route.path);
      }

      return isActiveInSubpath.value;
    });

    return {isActive, isBlankTarget, isRouterLink, linkAriaLabel, linkRel, linkTarget, linkItem};
  },
});
</script>
