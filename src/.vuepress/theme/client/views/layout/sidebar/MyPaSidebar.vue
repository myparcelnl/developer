<template>
  <ContentBlock
    v-if="exists"
    :variant="['border-right', 'dark']"
    tag="aside"
    class="-translate-x-full fixed h-full lg:translate-x-0 transition-all w-72 z-10"
    :class="{
      'translate-x-0': isOpen,
    }">
    <div class="h-full inset-0 overflow-y-scroll px-3 py-5 w-full">
      <slot name="top" />
      <SidebarItems />
      <slot name="bottom" />
    </div>
  </ContentBlock>
</template>

<script lang="ts">
import ContentBlock from '@mptheme/client/views/layout/content-block/ContentBlock.vue';
import SidebarItems from '@mptheme/client/views/layout/sidebar-items/SidebarItems.vue';
import { defineComponent } from 'vue';
import { useSidebar } from '@mptheme/client/services/composables/useSidebar';

export default defineComponent({
  name: 'MyPaSidebar',
  components: {
    ContentBlock,
    SidebarItems,
  },

  setup: () => {
    const { exists, isOpen } = useSidebar();

    return {
      exists,
      isOpen,
    };
  },
});
</script>
