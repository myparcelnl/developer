<template>
  <component
    :is="link ? 'AutoLink' : 'button'"
    v-test="'button'"
    :type="link ? '' : 'button'"
    role="button"
    class="no-link-styles rounded-full text-nowrap"
    :item="link"
    :class="[
      ...variantClass,
      {
        ['py-2 px-4']: !variant.includes('icon') && !variant.includes('sm'),
        ['transition-colors']: !$attrs?.class?.includes('transition-'),
        ['cursor-pointer']: !disabled,
        ['animate-pulse opacity-60']: disabled,
        ['cursor-not-allowed']: disabled,
      },
    ]"
    :aria-disabled="disabled"
    @click="disabled ? null : $emit('click', $event)">
    <span class="font-medium inline-flex m-auto">
      <slot>
        <template v-if="icon">
          <Icon
            :icon="icon"
            class="mr-1 my-auto" />
        </template>

        <template v-if="link">
          {{ link.text }}
        </template>
      </slot>
    </span>
  </component>
</template>

<script lang="ts">
import { PropType, defineComponent } from 'vue';
import Icon from '@mptheme/client/components/common/icon/Icon.vue';
import { MyPaNavLink } from '@mptheme/config.types';
import { buttonVariant } from '@mptheme/client/services/tailwind/variants/buttonVariant';
import { useTailwindVariant } from '@mptheme/client/composables/useTailwindVariant';

const { createVariantProp, getVariantClasses } = useTailwindVariant(buttonVariant);

export default defineComponent({
  name: 'MPButton',
  components: { Icon },
  props: {
    variant: createVariantProp(),

    link: {
      type: [String, Object] as PropType<string | MyPaNavLink>,
      default: null,
    },

    icon: {
      type: String,
      default: null,
    },

    /**
     * Whether the button should be disabled.
     */
    disabled: {
      type: Boolean,
    },
  },

  emits: ['click'],

  setup: (props) => {
    return {
      variantClass: getVariantClasses(props.variant),
    };
  },
});
</script>
