<template>
  <div class="flex relative">
    <div
      v-if="loading"
      class="animate-pulse bg-black bg-opacity-5 dark:bg-white h-full rounded w-full" />

    <Fragment :component="url ? 'AutoLink' : null">
      <Suspense>
        <AutoLink
          :href="url || ''"
          :item="{
            text: alt,
            link: url,
          }"
          class="flex flex-grow">
          <img
            :src="src"
            class="max-h-full"
            :class="[
              imageClass,
              {
                'no-style': noStyle,
              },
            ]"
            :alt="alt"
            @dragstart.prevent="null"
            @loadstart="onLoadStart"
            @load="onLoad"
            @error="onError" />
        </AutoLink>
      </Suspense>

      <img
        :src="src"
        class="max-h-full"
        :class="[
          imageClass,
          {
            'no-style': noStyle,
          },
        ]"
        :alt="alt"
        @dragstart.prevent="null"
        @loadstart="onLoadStart"
        @load="onLoad"
        @error="onError" />
    </Fragment>
  </div>
</template>

<script lang="ts">
import {PropType, defineComponent, ref} from 'vue';
import AutoLink from '@mptheme/client/components/global/AutoLink.vue';
import Fragment from '@mptheme/client/components/Fragment.vue';

export default defineComponent({
  name: 'MPImg',
  components: {
    AutoLink,
    Fragment,
  },

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

    url: {
      type: String,
      default: null,
    },

    /**
     * Ignore the default styles added to images on a content page.
     */
    noStyle: {
      type: Boolean,
    },
  },

  setup: () => {
    const loading = ref(false);

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
