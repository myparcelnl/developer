<template>
  <ul
    v-if="sidebarItems.length"
    class="sidebar-items">
    <SidebarItem
      v-for="item in sidebarItems"
      :key="item.link || item.text"
      :item="item" />
  </ul>
</template>

<script lang="ts">
import SidebarItem from '@theme/SidebarItem.vue';
import { defineComponent } from 'vue';
import { useFilteredSidebarItems } from '@mptheme/client/services/composables/useSidebarItems';

export default defineComponent({
  name: 'SidebarItems',
  components: {
    SidebarItem,
  },

  setup: () => {
    const sidebarItems = useFilteredSidebarItems();

    return { sidebarItems };
  },
});
</script>
