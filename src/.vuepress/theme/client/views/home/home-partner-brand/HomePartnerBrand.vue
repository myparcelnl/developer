<template>
  <Cta
    :link="link"
    :style="`background-color: ${color}`"
    class="before:content before:pb-[100%]"
    aria-label="visit">
    <div class="absolute bg-black group-hover:opacity-30 inset-0 opacity-0 transition-opacity" />

    <div class="absolute flex inset-5">
      <MPImg
        class="m-auto"
        :src="brandLogo"
        :alt="`${name} logo`" />
    </div>

    <MPButton
      variant="none"
      aria-label="visit"
      class="absolute bottom-2 group-hover:opacity-100 group-hover:translate-x-2 opacity-60 right-0 text-white transform transition-[transform,opacity]">
      Visit

      <Icon
        icon="chevron-right"
        class="my-auto text-2xl" />
    </MPButton>
  </Cta>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import Cta from '@mptheme/client/components/global/Cta.vue';
import Icon from '@mptheme/client/components/common/icon/Icon.vue';
import MPButton from '@mptheme/client/components/common/button/MPButton.vue';
import MPImg from '@mptheme/client/components/global/MPImg.vue';

export default defineComponent({
  name: 'HomePartnerBrand',
  components: {
    MPButton,
    Cta,
    MPImg,
    Icon,
  },

  props: {
    name: {
      type: String,
      required: true,
    },

    logo: {
      type: String,
      required: true,
    },

    link: {
      type: String,
      required: true,
    },

    color: {
      type: String,
      default: null,
    },
  },

  setup: (props) => {
    const brandLogo = computed(() => `/brands/${props.logo}`);

    return {
      brandLogo,
    };
  },
});
</script>
