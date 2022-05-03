<template>
  <Cta
    :link="link"
    link-full
    :style="`background-color: ${color}`"
    class="before:content before:pb-[100%]">
    <div class="absolute bg-black group-hover:opacity-30 inset-0 opacity-0 transition-opacity" />

    <div class="absolute flex inset-5">
      <MPImg
        class="m-auto"
        :src="brandLogo"
        :alt="`${name} logo`" />
    </div>

    <div class="absolute bottom-5 flex group-hover:opacity-100 group-hover:translate-x-2 opacity-60 right-5 text-white transform transition-[transform,opacity]">
      <div
        role="heading"
        aria-level="2"
        class="font-normal my-auto"
        v-text="'Read'" />

      <Icon
        icon="chevron-right"
        class="my-auto pt-1 text-2xl top-1" />
    </div>
  </Cta>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import Cta from '@mptheme/client/components/global/Cta.vue';
import Icon from '@mptheme/client/components/common/icon/Icon.vue';
import MPImg from '@mptheme/client/components/global/MPImg.vue';
import { useNavLink } from '@vuepress/theme-default/lib/client/composables';

export default defineComponent({
  name: 'HomePartnerBrand',
  components: {
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
    const linkItem = useNavLink(props.link);

    return {
      linkItem,
      brandLogo,
    };
  },
});
</script>
