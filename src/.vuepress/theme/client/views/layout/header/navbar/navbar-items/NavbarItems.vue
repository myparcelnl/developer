<template>
  <nav
    v-if="navbarLinks.length"
    class="gap-3 grid grid-flow-col">
    <div
      v-for="item in navbarLinks"
      :key="item.text"
      class="flex grow"
      :class="{
        'border-b-2 border-b-goldfish-500 text-goldfish-500': isActive(item),
      }">
      <NavbarDropdown
        v-if="item.children"
        :item="item" />

      <AutoLink
        v-else
        class="block m-auto"
        :class="{
          'opacity-60': item.sub,
          'text-bold': isActive(item),
        }"
        :item="item" />
    </div>
  </nav>
</template>

<script lang="ts">
import {useRoute} from 'vue-router';
import {type ComputedRef, computed, defineComponent} from 'vue';
import {type MyPaNavbarItem, type MyPaResolvedNavbarItem} from '@mptheme/config.types';
import {useNavbarConfig} from '@mptheme/client/composables';
import NavbarDropdown from '@mptheme/client/components/navbar-dropdown/NavbarDropdown.vue';
import AutoLink from '@mptheme/client/components/global/AutoLink.vue';

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
    const navbarLinks: ComputedRef<MyPaResolvedNavbarItem[]> = useNavbarConfig();

    return {
      isActive: (item: MyPaNavbarItem) => activeBase.value === item.link,
      navbarLinks,
    };
  },
});
</script>
