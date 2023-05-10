<template>
  <div class="border mb-3 mt-2 overflow-hidden rounded-lg">
    <component
      :is="tag"
      class="block cursor-pointer px-4 py-3"
      @click="toggled = !toggled">
      <ToggleChevron :toggle="toggled" />

      <span
        class="pl-2"
        v-text="title" />
    </component>

    <ContentBlock
      v-show="toggled"
      variant="border-top"
      class="px-4 py-2">
      <slot />
    </ContentBlock>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';
import ContentBlock from '@mptheme/client/views/layout/content-block/ContentBlock.vue';
import ToggleChevron from '@mptheme/client/components/common/ToggleChevron.vue';

export default defineComponent({
  name: 'DetailsExpand',
  components: {ContentBlock, ToggleChevron},

  props: {
    tag: {
      type: String,
      default: () => 'label',
    },

    title: {
      type: String,
      default: () => 'Details',
    },
  },

  setup: () => {
    const toggled = ref(false);

    return {
      toggled,
    };
  },
});
</script>
