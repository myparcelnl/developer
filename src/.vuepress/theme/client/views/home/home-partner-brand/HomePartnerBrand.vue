<template>
  <AutoLink
    :item="linkItem"
    class="before:content before:pb-[100%] flex group overflow-hidden p-5 relative rounded-xl"
    :style="`background-color: ${color}`">
    <div class="absolute bg-black group-hover:opacity-30 inset-0 opacity-0 transition-opacity" />

    <div class="absolute flex inset-5">
      <MPImg
        class="m-auto"
        :src="brandLogo"
        :alt="`${name} logo`" />
    </div>

    <div class="flex group-hover:opacity-100 group-hover:translate-x-2 ml-auto mt-auto opacity-60 text-white transform transition-[transform,opacity]">
      <div
        role="heading"
        aria-level="2"
        class="font-normal my-auto"
        v-text="'Read'" />

      <MPIcon
        icon="chevron-right"
        class="my-auto pt-1 text-2xl top-1" />
    </div>
  </AutoLink>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import AutoLink from '@mptheme/client/components/auto-link/AutoLink.vue';
import MPIcon from '@mptheme/client/components/common/icon/Icon.vue';
import MPImg from '@mptheme/client/components/common/MPImg.vue';
import { useNavLink } from '@vuepress/theme-default/lib/client/composables';

export default defineComponent({
  name: 'HomePartnerBrand',
  components: {
    MPImg,
    MPIcon,
    AutoLink,
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
