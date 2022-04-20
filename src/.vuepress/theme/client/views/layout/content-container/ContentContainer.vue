<template>
  <component
    :is="tag"
    class="md:px-8 mx-auto px-5 w-full"
    :class="classes">
    <slot />
  </component>
</template>

<script lang="ts">
import { containerVariant } from '@mptheme/client/services/tailwind/variants/containerVariant';
import { defineComponent } from 'vue';
import { useTailwindVariant } from '@mptheme/client/services/composables/useTailwindVariant';

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
