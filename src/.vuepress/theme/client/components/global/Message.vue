<template>
  <div
    role="note"
    class="before:absolute before:bottom-0 before:h-full before:left-0 before:top-0 before:w-1 border dark:text-zinc-200 mb-2 mt-3 overflow-hidden px-3 py-3 relative rounded"
    :class="classes">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { defineVariant } from '@mptheme/client/services/tailwind/defineVariant';
import { useTailwindVariant } from '@mptheme/client/services/composables/useTailwindVariant';

const messageVariant = defineVariant('message', {
  tip: ['before:bg-sky-500', 'bg-sky-50', 'dark:bg-sky-900'],
  note: ['before:bg-amber-500', 'bg-amber-50', 'dark:bg-amber-900'],
  error: ['before:bg-rose-500', 'bg-rose-50', 'dark:bg-rose-900'],
  success: ['before:bg-green-500', 'bg-green-50', 'dark:bg-green-900'],
});
const variant = useTailwindVariant(messageVariant);

export default defineComponent({
  name: 'Message',

  props: {
    type: variant.createVariantProp(),
  },

  setup: (props) => ({
    classes: variant.getVariantClasses(props.type),
  }),
});
</script>
