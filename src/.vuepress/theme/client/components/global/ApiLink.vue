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
import { ComputedRef, computed, defineComponent } from 'vue';
import AutoLink from '@mptheme/client/components/global/AutoLink.vue';
import { MyPaNavbarItem } from '@mptheme/config.types';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'ApiLink',
  components: { AutoLink },
  props: {
    to: {
      type: String,
      required: true,
    },
  },

  setup: (props) => {
    const to = props.to.split('_');

    const resolveRoute = () => {
      return useRouter()
        .getRoutes()
        .find((route) => {
          const PREFIX_LENGTH = 2;
          const number = to[0].padStart(PREFIX_LENGTH, '0');
          return route.path.startsWith(`/api-reference/${number}`);
        });
    };

    const linkItem: ComputedRef<MyPaNavbarItem | null> = computed(() => {
      const resolved = resolveRoute();

      if (!resolved) {
        // eslint-disable-next-line no-console
        console.warn(`⚠️ ApiLink to ${props.to} could not be resolved.`);
        return null;
      }

      return {
        link: `${resolved.path}#_${to.map((str) => str.toLowerCase()).join('-')}`,
        text: props.to,
      };
    });

    return {
      linkItem,
    };
  },
});
</script>
