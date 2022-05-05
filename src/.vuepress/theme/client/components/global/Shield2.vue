<template>
  <AutoLink
    v-if="href"
    class="inline-flex"
    :item="href">
    <div
      v-if="loading"
      class="animate-pulse bg-black bg-opacity-20 h-2 rounded-sm w-30" />
    <MPImg
      v-show="!loading"
      role="none"
      :src="url"
      :alt="`shield for ${url}`"
      @load="loading = false" />
  </AutoLink>

  <template v-else>
    <div
      v-if="loading"
      class="animate-pulse bg-black bg-opacity-20 h-2 rounded-sm w-30" />
    <MPImg
      v-show="!loading"
      class="inline-flex"
      role="none"
      :src="url"
      :alt="`shield for ${url}`"
      @load="loading = false" />
  </template>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
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

    href: {
      type: String,
      default: null,
    },
  },

  setup: (props) => {
    const loading = ref(true);

    return {
      loading,
      url: computed(() => {
        return BASE_URL + props.path;
      }),
    };
  },
});
</script>
