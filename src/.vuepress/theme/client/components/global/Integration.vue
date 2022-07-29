<template>
  <div>
    <div
      :class="[
        'border',
        'flex',
        'flex-col',
        'group',
        'hover:outline-amber-500',
        'outline',
        'outline-2',
        'outline-offset-2',
        'outline-transparent',
        'overflow-hidden',
        'rounded-lg',
        'transition-all',
      ]">
      <div
        v-if="data.image"
        class="flex grow px-3 py-5 relative"
        :class="[
          data.classes,
          {
            'bg-white': !data.classes,
          },
        ]">
        <MPImg
          class="grow h-24"
          :src="`/integrations/${data.image}`"
          role="none"
          image-class="m-auto"
          :alt="`${data.title} logo`" />
        <Icon
          v-if="data.internal"
          title="Maintained by MyParcel"
          icon="myparcel"
          class="absolute right-2 text-xl top-1" />
      </div>

      <div class="border-t dark:bg-zinc-800 p-3">
        <span
          class="font-bold"
          v-text="data.title" />
        <br>
        <div v-if="data.repository">
          <Icon
            icon="github"
            class="mr-2" />
          <AutoLink :item="`https://github.com/${data.repository}`">
            View on GitHub
          </AutoLink>
        </div>

        <div v-if="data.documentation">
          <Icon
            icon="documentation"
            class="mr-2" />
          <AutoLink :item="data.documentation">
            Documentation
          </AutoLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Integration, useIntegrations } from '@mptheme/client/composables/useIntegrations';
import { ComputedRef, PropType, Ref, computed, defineComponent } from 'vue';
import AutoLink from '@mptheme/client/components/global/AutoLink.vue';
import Icon from '@mptheme/client/components/common/icon/Icon.vue';
import MPImg from '@mptheme/client/components/global/MPImg.vue';

export default defineComponent({
  name: 'Integration',
  components: {
    AutoLink,
    Icon,
    MPImg,
  },

  props: {
    name: {
      type: String,
      default: null,
    },

    integration: {
      type: Object as PropType<Integration>,
      default: null,
    },
  },

  setup: (props) => {
    if (!props.name && !props.integration) {
      throw new Error('Either a name or integration prop must be provided to use <Integration />.');
    }

    const integrations = useIntegrations();

    const data: ComputedRef<Integration> = computed(() => {
      return props.integration ?? integrations.value.find(({ name }) => name === props.name);
    });

    return {
      data,
    };
  },
});
</script>
