<template>
  <ul v-if="items.length">
    <SidebarItem
      v-for="item in items"
      :key="item.link || item.text"
      :item="item" />
  </ul>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {useSidebar} from '@mptheme/client/composables';
import SidebarItem from '@mptheme/client/components/sidebar-item/SidebarItem.vue';

export default defineComponent({
  name: 'SidebarItems',
  components: {
    SidebarItem,
  },

  setup: () => {
    const {items} = useSidebar();

    return {items};
  },
});
</script>
