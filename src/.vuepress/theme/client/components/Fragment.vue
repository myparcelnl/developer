<template>
  <component
    :is="component"
    v-if="component">
    <slot />
  </component>
  <slot v-else />
</template>

<script lang="ts">
import {type PropType, defineComponent} from 'vue';
import {type ComponentOrHtmlElement} from '../../../../../types/types';

export default defineComponent({
  name: 'Fragment',
  props: {
    component: {
      type: [String, Object] as PropType<ComponentOrHtmlElement>,
      default: null,
    },
  },
});
</script>
