<template>
  <ContentBlock
    v-if="exists"
    :variant="['border-right', 'dark']"
    tag="aside"
    class="fixed h-full transition-all w-80 z-10"
    :class="{
      '-translate-x-full lg:translate-x-0': !isOpen,
      'translate-x-0': isOpen,
    }">
    <div class="h-full inset-0 overflow-y-scroll pb-24 pt-5 px-3 w-full">
      <slot name="top" />
      <SidebarItems />
      <slot name="bottom" />
    </div>
  </ContentBlock>

  <Transition
    name="fade"
    appear>
    <div
      v-if="exists"
      v-show="toggled"
      class="absolute bg-black bg-opacity-50 inset-0"
      @click="toggle" />
  </Transition>
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
    const { exists, isOpen, toggle, toggled } = useSidebar();

    return {
      toggle,
      toggled,
      exists,
      isOpen,
    };
  },
});
</script>
