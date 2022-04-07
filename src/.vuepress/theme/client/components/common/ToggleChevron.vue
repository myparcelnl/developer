<template>
  <MyPaIcon
    icon="chevron-right"
    class="rotate-0 transform transition-transform"
    :class="{
      'rotate-240': toggle,
    }" />
</template>

<script lang="ts">
import MyPaIcon from '@Components/common/icon/Icon.vue';
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
