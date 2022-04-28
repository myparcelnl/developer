<template>
  <div
    class="flex flex-col group hover:text-white overflow-hidden p-6 relative rounded-xl text-white">
    <div class="flex flex-col">
      <MPIcon
        v-if="icon"
        class="text-5xl"
        :icon="icon" />

      <h2
        v-if="title"
        v-text="title" />

      <p
        v-if="subtitle"
        v-text="subtitle" />

      <MPButton
        class="flex"
        variant="outlinePrimary"
        :link="linkItem">
        <MPIcon icon="chevron-right" />
      </MPButton>
    </div>
  </div>

  <div class="">
    <slot />
    <MPButton
      v-if="link"
      :link="linkItem" />
  </div>
</template>

<script>
import MPButton from '../common/button/MPButton';
import { useNavLink } from '@vuepress/theme-default/lib/client/composables';
import MPIcon from '../common/icon/Icon';

export default {
  name: 'Cta',
  components: { MPIcon, MPButton },

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
};
</script>
