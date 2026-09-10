<template>
  <component
    :is="tag"
    class="md:px-6 mx-auto px-4 w-full"
    :class="classes">
    <slot />
  </component>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {containerVariant} from '@mptheme/client/services/tailwind/variants/containerVariant';
import {useTailwindVariant} from '@mptheme/client/composables/useTailwindVariant';

const variant = useTailwindVariant(containerVariant);

export default defineComponent({
  name: 'ContentContainer',
  props: {
    type: variant.createVariantProp(),
    tag: {
      type: String,
      default: 'div',
    },
  },

  setup: (props) => {
    return {
      classes: variant.getVariantClasses(props.type),
    };
  },
});
</script>
