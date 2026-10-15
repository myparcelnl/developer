<template>
  <AutoLink
    v-if="linkItem"
    :item="linkItem">
    <slot>
      {{ to }}
    </slot>
  </AutoLink>

  <span
    v-else
    v-text="to" />
</template>

<script lang="ts">
import {useRoutes} from 'vuepress/client';
import {type ComputedRef, computed, defineComponent} from 'vue';
import {type MyPaNavbarItem} from '@mptheme/config.types';
import AutoLink from '@mptheme/client/components/global/AutoLink.vue';

export default defineComponent({
  name: 'ApiLink',
  components: {AutoLink},
  props: {
    to: {
      type: String,
      required: true,
    },
  },

  setup: (props) => {
    const routes = useRoutes();

    const resolveRoute = () => {
      const to = props.to.split('_');
      const PREFIX_LENGTH = 2;
      const number = to[0].padStart(PREFIX_LENGTH, '0');

      return Object.keys(routes.value).find((path) => path.startsWith(`/api-reference/${number}`));
    };

    const linkItem: ComputedRef<MyPaNavbarItem | null> = computed(() => {
      const to = props.to.split('_');
      const resolved = resolveRoute();

      if (!resolved) {
        // eslint-disable-next-line no-console
        console.warn(`⚠️ ApiLink to ${props.to} could not be resolved.`);
        return null;
      }

      return {
        link: `${resolved}#_${to.map((str) => str.toLowerCase()).join('-')}`,
        text: props.to,
      };
    });

    return {
      linkItem,
    };
  },
});
</script>
