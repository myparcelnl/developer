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

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import ContentBlock from '@mptheme/client/views/layout/content-block/ContentBlock.vue';
import SidebarItems from '@mptheme/client/views/layout/sidebar/sidebar-items/SidebarItems.vue';
import { useRoute } from 'vue-router';
import { useSidebar } from '../../../composables';

const sidebar = ref<HTMLElement|null>(null);
const route = useRoute();

/**
 * Scroll active sidebar item into view if it's outside the screen.
 */
const scrollIntoView = (): void => {
  if (!sidebar.value) {
    return;
  }

  const activeSidebarItem = document.querySelector('.sidebar-item--active');

  if (!activeSidebarItem) {
    return;
  }

  const sidebarBounds = sidebar.value.getBoundingClientRect();
  const activeSidebarItemBounds = activeSidebarItem.getBoundingClientRect();

  if (activeSidebarItemBounds.top < sidebarBounds.top) {
    activeSidebarItem.scrollIntoView(true);
  } else if (activeSidebarItemBounds.top + activeSidebarItemBounds.height > sidebarBounds.top + sidebarBounds.height) {
    activeSidebarItem.scrollIntoView(false);
  }
};

watch(() => route.hash, scrollIntoView);

onMounted(() => {
  scrollIntoView();
});

const { toggle, isOpen, exists, toggled, isNavbar } = useSidebar();
</script>
