<template>
  <ul v-if="sidebarItems.length">
    <SidebarItem
      v-for="item in sidebarItems"
      :key="item.link || item.text"
      :item="item" />
  </ul>
</template>

<script lang="ts">
import SidebarItem from '@mptheme/client/components/sidebar-item/SidebarItem.vue';
import { defineComponent } from 'vue';
import { useSidebarItems } from '@vuepress/theme-default/lib/client';

export default defineComponent({
  name: 'SidebarItems',
  components: {
    SidebarItem,
  },

  setup: () => {
    const sidebarItems = useSidebarItems();

    return { sidebarItems };
  },
});
</script>
