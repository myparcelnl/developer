<template>
  <AutoLink
    class="flex flex-col group overflow-hidden p-6 relative rounded-xl text-white"
    :item="linkItem">
    <div class="absolute bg-black group-hover:opacity-30 inset-0 opacity-0 transition-opacity" />

    <div class="-inset-36 absolute flex left-0 mix-blend-soft-light overflow-hidden top-0 translate-3d-0">
      <FloepjeLeft class="fill-white opacity-30" />
    </div>

    <MyPaIcon
      v-if="icon"
      class="text-5xl"
      :icon="icon" />

    <h2
      v-if="title"
      v-text="title" />
    <p
      v-if="subtitle"
      v-text="subtitle" />

    <MyPaButton
      class="flex justify-self-end self-end"
      :variant="['icon', 'outlineLight']">
      <MyPaIcon icon="chevron-right" />
    </MyPaButton>
  </AutoLink>
</template>

<script lang="ts">
import AutoLink from '@mptheme/client/components/auto-link/AutoLink.vue';
import FloepjeLeft from '@Public/images/floepje_left.svg';
import MyPaButton from '@mptheme/client/components/common/button/MyPaButton.vue';
import MyPaIcon from '@mptheme/client/components/common/icon/Icon.vue';
import { defineComponent } from 'vue';
import { useNavLink } from '@vuepress/theme-default/lib/client/composables';

export default defineComponent({
  name: 'HomeLink',
  components: {
    AutoLink,
    FloepjeLeft,
    MyPaButton,
    MyPaIcon,
  },

  props: {
    title: {
      type: String,
      default: null,
    },

    subtitle: {
      type: String,
      default: null,
    },

    icon: {
      type: String,
      default: null,
    },

    link: {
      type: String,
      default: null,
    },
  },

  setup: (props) => {
    const linkItem = useNavLink(props.link);

    return { linkItem };
  },
});
</script>
