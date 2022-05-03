<template>
  <div class="before:content before:pb-[100%] bg-zinc-400 flex group overflow-hidden relative rounded-xl">
    <div>
      <MPImg
        v-if="normal"
        alt="normal image"
        :src="normalSrc"
        :class="{
          'block group-hover:hidden': normal && funny,
        }" />
      <MPImg
        v-if="funny"
        alt="funny image"
        :src="funnySrc"
        :class="{
          'group-hover:block hidden': normal && funny,
        }" />
    </div>

    <div class="absolute bg-goldfish-500 bg-opacity-50 duration-150 flex group-hover:opacity-100 inset-0 opacity-0 transition-all">
      <span
        class="font-display group-hover:translate-y-0 m-auto text-2xl text-white transform transition-transform translate-y-2"
        v-text="name" />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import MPImg from '@mptheme/client/components/global/MPImg.vue';
import { isLinkHttp } from '@vuepress/shared';

const BASE_URL = 'https://www.myparcel.nl/app/uploads';

export default defineComponent({
  name: 'TeamMember',
  components: { MPImg },
  props: {
    name: {
      type: String,
      required: true,
    },

    normal: {
      type: String,
      required: true,
    },

    funny: {
      type: String,
      required: false,
      default: null,
    },
  },

  setup: (props) => {
    const getImageUrl = (url: string | null) => {
      if (!url) {
        return null;
      }

      if (!isLinkHttp(url)) {
        return BASE_URL + url;
      }

      return url;
    };

    return {
      normalSrc: computed(() => getImageUrl(props.normal)),
      funnySrc: computed(() => getImageUrl(props.funny)),
    };
  },
});
</script>
