<template>
  <aside
    v-if="exists"
    ref="sidebar"
    class="fixed h-full sidebar transition-all w-80 z-30"
    :class="{
      'ds__ignore': isNavbar,
      '-translate-x-full': !isOpen,
      'xl:translate-x-0': !isOpen && !isNavbar,
      'translate-x-0': isOpen,
    }">
    <ContentBlock
      :variant="['border-right', 'dark']"
      class="gutter-stable h-full inset-0 overflow-y-auto pb-24 pt-5 px-3 w-full">
      <SidebarItems />
    </ContentBlock>
  </aside>

  <Transition name="fade">
    <div
      v-if="exists"
      v-show="toggled"
      class="bg-black bg-opacity-50 fixed inset-0 z-20"
      @click="() => toggle(false)" />
  </Transition>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import ContentBlock from '@mptheme/client/views/layout/content-block/ContentBlock.vue';
import SidebarItems from '@mptheme/client/views/layout/sidebar/sidebar-items/SidebarItems.vue';
import { useRoute } from 'vue-router';
import { useSidebar } from '@mptheme/client/composables';

export default defineComponent({
  name: 'MPSidebar',
  components: {
    SidebarItems,
    ContentBlock,
  },

  setup: () => {
    const sidebar = ref<HTMLElement|null>(null);
    const route = useRoute();

    // Scroll active sidebar item into view if it's outside the screen
    watch(() => route.hash, () => {
      if (!sidebar.value) {
        return;
      }

      // get the active sidebar item DOM, whose href equals to the current route
      const activeSidebarItem = document.querySelector(
        `.sidebar a.sidebar-item[href="${route.path}${route.hash}"]`,
      );

      if (!activeSidebarItem) {
        return;
      }

      const sidebarTop = sidebar.value.getBoundingClientRect().top;
      const sidebarHeight = sidebar.value.getBoundingClientRect().height;
      const activeSidebarItemTop = activeSidebarItem.getBoundingClientRect().top;
      const activeSidebarItemHeight = activeSidebarItem.getBoundingClientRect().height;

      if (activeSidebarItemTop < sidebarTop) {
        activeSidebarItem.scrollIntoView(true);
      } else if (activeSidebarItemTop + activeSidebarItemHeight > sidebarTop + sidebarHeight) {
        activeSidebarItem.scrollIntoView(false);
      }
    });

    return {
      ...useSidebar(),
      sidebar,
    };
  },
});
</script>
