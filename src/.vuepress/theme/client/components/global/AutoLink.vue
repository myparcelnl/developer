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
import { PropType, computed, defineComponent } from 'vue';
import { NavLink } from '@vuepress/theme-default/lib/shared';
import { useLink } from '@mptheme/client/services/composables/useLink';
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

    /**
     * Override the text content. Only works if default slot is not used.
     */
    text: {
      type: String,
      default: null,
    },
  },

  setup: (props, ctx) => {
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
        return !localeKeys.some((key) => key === linkItem.value.link);
      }

      return linkItem.value.link !== '/';
    });

    const isActiveInSubpath = computed(() => {
      if (!shouldBeActiveInSubpath.value) {
        return false;
      }

      return route.path.startsWith(linkItem.value.link);
    });

    // if this link is active
    const isActive = computed(() => {
      if (!isRouterLink.value) {
        return false;
      }

      if (linkItem.value.activeMatch) {
        return new RegExp(linkItem.value.activeMatch).test(route.path);
      }

      return isActiveInSubpath.value;
    });

    // onMounted(() => {
    //   console.log(ctx.slots?.default?.()?.[0]?.el?.tagName);
    // });

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
