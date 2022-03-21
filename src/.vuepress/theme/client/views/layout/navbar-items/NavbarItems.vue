<template>
  <nav
    v-if="navbarLinks.length"
    class="gap-3 grid grid-flow-col pl-4">
    <div
      v-for="item in navbarLinks"
      :key="item.text">
      <AutoLink
        class="block h-full"
        :class="{
          'opacity-60': item.sub,
        }"
        :item="item" />
    </div>
  </nav>
</template>

<script lang="ts">
import AutoLink from '@vuepress/theme-default/lib/client/components/AutoLink.vue';
import { defineComponent } from 'vue';
import { useNavbarConfig } from '@mptheme/client/services/composables/useNavbarConfig';

export default defineComponent({
  name: 'NavbarItems',

  components: {
    AutoLink,
  },

  setup: () => {
    return {
      navbarLinks: useNavbarConfig(),
    };
  },
});
</script>
