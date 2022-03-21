<template>
  <MyPaIcon
    icon="chevron-right"
    class="font-bold text-lg transition-transform"
    :class="{
      'rotate-90': toggle,
      'rotate-0': !toggle,
    }" />
</template>

<script lang="ts">
import MyPaIcon from '@mptheme/client/components/common/icon/Icon.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ToggleChevron',
  components: { MyPaIcon },
  props: {
    toggle: {
      type: Boolean,
    },
  },
});
</script>
