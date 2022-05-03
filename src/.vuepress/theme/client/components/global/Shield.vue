<template>
  <AutoLink :href="href">
    <MPImg
      role="none"
      :src="url"
      :alt="alt ?? ''" />
  </AutoLink>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import AutoLink from '@mptheme/client/components/global/AutoLink.vue';
import MPImg from '@mptheme/client/components/global/MPImg.vue';

const BASE_URL = 'https://img.shields.io/';

export default defineComponent({
  name: 'Shield',
  components: { AutoLink, MPImg },

  props: {
    path: {
      type: String,
      required: true,
    },

    alt: {
      type: String,
      required: true,
    },

    href: {
      type: String,
      default: null,
    },
  },

  setup: (props) => {
    return {
      url: computed(() => {
        return BASE_URL + props.path;
      }),
    };
  },
});
</script>
