<template>
  <nav
    v-if="navbarLinks.length"
    class="gap-3 grid grid-flow-col pl-4">
    <div
      v-for="item in navbarLinks"
      :key="item.text"
      class="grow"
      :class="
        {
          'border-b-2 border-b-goldfish-500 text-goldfish-500': isActive(item),
        }">
      <NavbarDropdown
        v-if="item.children"
        :item="item" />

      <AutoLink
        v-else
        class="block h-full"
        :class="{
          'opacity-60': item.sub,
          'text-bold': isActive(item),
        }"
        :item="item" />
    </div>
  </nav>
</template>

<script lang="ts">
import AutoLink from '@mptheme/client/components/global/AutoLink.vue';
import NavbarDropdown from '@mptheme/client/components/navbar-dropdown/NavbarDropdown.vue';
import { computed, defineComponent } from 'vue';
import { useNavbarConfig } from '@mptheme/client/services/composables/useNavbarConfig';
import { useRoute } from 'vue-router';
import { NavbarItem } from '@mptheme/config.types';

export default defineComponent({
  name: 'NavbarItems',

  components: {
    AutoLink,
    NavbarDropdown,
  },

  setup: () => {
    const route = useRoute();

    const activeBase = computed(() => {
      const [, base] = route.path.split('/');
      return `/${base}`;
    });

    return {
      isActive: (item: NavbarItem) => activeBase.value === item.link,
      navbarLinks: useNavbarConfig(),
    };
  },
});
</script>
