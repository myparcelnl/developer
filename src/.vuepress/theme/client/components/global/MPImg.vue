<template>
  <div class="flex relative">
    <div
      v-if="loading"
      class="animate-pulse bg-black bg-opacity-5 dark:bg-white h-full rounded w-full" />

    <img
      v-show="!loading"
      :src="src"
      class="m-auto max-h-full"
      :alt="alt"
      @dragstart.prevent="null"
      @loadstart="onLoadStart"
      @load="onLoad"
      @error="onError">
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'MPImg',

  props: {
    src: {
      type: String,
      required: true,
    },

    alt: {
      type: String,
      required: true,
    },
  },

  setup: () => {
    const loading = ref(true);

    return {
      loading,

      onLoadStart() {
        loading.value = true;
      },

      onLoad() {
        loading.value = false;
      },

      onError() {
        loading.value = false;
      },
    };
  },
});
</script>
