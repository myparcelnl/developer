<template>
  <aside
    v-if="exists"
    class="fixed h-full transition-all w-80 z-30"
    :class="{
      '-translate-x-full': !isOpen,
      'lg:translate-x-0': !isOpen && !isNavbar,
      'translate-x-0': isOpen,
    }">
    <ContentBlock
      :variant="['border-right', 'dark']"
      class="h-full inset-0 overflow-y-scroll pb-24 pt-5 px-3 w-full">
      <slot name="top" />
      <SidebarItems />
      <slot name="bottom" />
    </ContentBlock>
  </aside>

  <Transition
    name="fade"
    appear>
    <div
      v-if="exists"
      v-show="toggled"
      class="bg-black bg-opacity-50 fixed inset-0 z-20"
      @click="toggle" />
  </Transition>
</template>

<script lang="ts">
import ContentBlock from '@mptheme/client/views/layout/content-block/ContentBlock.vue';
import SidebarItems from '@mptheme/client/views/layout/sidebar-items/SidebarItems.vue';
import { defineComponent } from 'vue';
import { useSidebar } from '@mptheme/client/services/composables/useSidebar';

export default defineComponent({
  name: 'MPSidebar',
  components: {
    ContentBlock,
    SidebarItems,
  },

  setup: () => useSidebar(),
});
</script>
