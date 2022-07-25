<template>
  <div
    role="note"
    :class="[
      'before:absolute',
      'before:bottom-0',
      'before:h-full',
      'before:left-0',
      'before:top-0',
      'before:w-1',
      'border',
      'dark:text-zinc-200',
      'mb-2',
      'mt-3',
      'overflow-hidden',
      'px-5',
      'py-3',
      'relative',
      'rounded',
      wrapperClasses,
    ]">
    <b
      v-if="title"
      :class="textClasses"
      v-text="title" />

    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { messageBackgroundVariant } from '@mptheme/client/services/tailwind/variants/messageBackgroundVariant';
import { messageTextVariant } from '@mptheme/client/services/tailwind/variants/messageTextVariant';
import { useTailwindVariant } from '@mptheme/client/composables/useTailwindVariant';

const background = useTailwindVariant(messageBackgroundVariant);
const text = useTailwindVariant(messageTextVariant);

export default defineComponent({
  name: 'Message',

  props: {
    title: {
      type: String,
      default: null,
    },

    type: background.createVariantProp(),
  },

  setup: (props) => ({
    wrapperClasses: background.getVariantClasses(props.type),
    textClasses: text.getVariantClasses(props.type),
  }),
});
</script>
