<template>
  <div class="flex relative">
    <Transition name="fade">
      <div
        v-if="loading"
        class="animate-pulse bg-black bg-opacity-5 dark:bg-white h-full rounded w-full" />
    </Transition>

    <img
      :src="src"
      class="max-h-full"
      :class="imageClass"
      :alt="alt"
      @dragstart.prevent="null"
      @loadstart="onLoadStart"
      @load="onLoad"
      @error="onError">
  </div>
</template>

<script lang="ts">
import { PropType, defineComponent, ref } from 'vue';

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

    imageClass: {
      type: [String, Array, Object] as PropType<string[] | string | Record<string, string>>,
      default: null,
    },
  },

  setup: () => {
    const loading = ref(true);

    return {
      loading,

      onLoadStart() {
        console.log('onLoadStart');
        loading.value = true;
      },

      onLoad() {
        console.log('onLoad');
        loading.value = false;
      },

      onError() {
        console.log('onError');
        loading.value = false;
      },
    };
  },
});
</script>
