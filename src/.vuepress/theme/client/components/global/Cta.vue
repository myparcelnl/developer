<template>
  <component
    :is="linkFull && link
      ? 'AutoLink'
      : 'div'"
    class="border flex flex-col group overflow-hidden p-6 relative rounded-xl"
    :item="linkFull ? link : null">
    <slot name="before" />

    <slot v-if="$slots.default" />
    <template v-else>
      <Icon
        v-if="icon"
        class="text-5xl"
        :icon="icon" />

      <MPImg
        v-if="img"
        alt=""
        :class="imgClass"
        :src="img" />

      <h2
        v-if="title"
        class="pb-0"
        v-text="title" />

      <p
        v-if="subtitle"
        v-text="subtitle" />

      <MPButton
        v-if="link && !linkFull"
        class="mt-auto"
        :variant="buttonVariant"
        :link="link">
        <Icon icon="chevron-right" />
      </MPButton>
    </template>

    <slot name="after" />
  </component>
</template>

<script lang="ts">
import Icon from '@mptheme/client/components/common/icon/Icon.vue';
import MPButton from '@mptheme/client/components/common/button/MPButton.vue';
import MPImg from '@mptheme/client/components/global/MPImg.vue';
import { buttonVariant } from '@mptheme/client/services/tailwind/variants/buttonVariant';
import { defineComponent } from 'vue';
import { merge } from 'lodash-es';
import { useTailwindVariant } from '@mptheme/client/services/composables/useTailwindVariant';

const buttonTailwindVariant = useTailwindVariant(buttonVariant);

export default defineComponent({
  name: 'Cta',
  components: { MPImg, Icon, MPButton },

  props: {
    img: {
      type: String,
      default: null,
    },

    title: {
      type: String,
      default: null,
    },

    subtitle: {
      type: String,
      default: null,
    },

    icon: {
      type: String,
      default: null,
    },

    link: {
      type: String,
      default: null,
    },

    buttonVariant: merge(
      {},
      buttonTailwindVariant.createVariantProp(),
      {
        default: ['outlineLight', 'icon'],
      },
    ),

    linkFull: {
      type: Boolean,
    },

    imgClass: {
      type: String,
      default: null,
    },
  },
});
</script>
