<template>
  <ContentBlock
    :variant="mergedVariant"
    class="dark:text-zinc-400 text-sm text-zinc-600">
    <slot />
  </ContentBlock>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import ContentBlock from '@mptheme/client/views/layout/content-block/ContentBlock.vue';
import { blockVariant } from '@mptheme/client/services/tailwind/variants/blockVariant';
import { toArray } from '@mptheme/client/utils/toArray';
import { useTailwindVariant } from '@mptheme/client/services/composables/useTailwindVariant';

const variant = useTailwindVariant(blockVariant);

export default defineComponent({
  name: 'FooterSection',
  components: { ContentBlock },
  props: {
    variant: variant.createVariantProp(),
  },

  setup: (props) => {
    return {
      mergedVariant: computed(() => [
        ...toArray(props.variant),
        'border-top',
      ]),
    };
  },
});
</script>
