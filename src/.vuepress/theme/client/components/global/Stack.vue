<template>
  <div class="gap-4 grid">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Stack',

  // props: {
  //   type: variant.createVariantProp(),
  // },

  setup: (props, ctx) => {
    return {
      // classes: variant.getVariantClasses(props.type),
    };
  },
});
</script>
