<template>
  <div
    class="md:px-8 mx-auto px-5 w-full"
    :class="classes">
    <slot />
  </div>
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
  },

  setup: (props) => {
    return {
      classes: variant.getVariantClasses(props.type),
    };
  },
});
</script>
