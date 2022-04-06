<template>
  <AutoLink :item="linkItem">
    {{ to }}
  </AutoLink>
</template>

<script lang="ts">
import AutoLink from '@Components/auto-link/AutoLink.vue';
import { NavbarItem } from '@vuepress/theme-default/lib/shared';
import { defineComponent } from '@vue/runtime-core';

export default defineComponent({
  name: 'ApiLink',
  components: { AutoLink },
  props: {
    to: {
      type: String,
      required: true,
    },
  },

  setup: (props) => {
    const linkItem: NavbarItem = {
      link: `https://myparcelnl.github.io/api/${props.to}`,
      text: props.to,
      target: '_blank',
    };

    return {
      linkItem,
    };
  },
});
</script>
