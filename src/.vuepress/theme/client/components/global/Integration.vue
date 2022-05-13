<template>
  <div>
    <div class="border flex flex-col overflow-hidden rounded-lg">
      <div
        v-if="image"
        class="flex grow px-3 py-5"
        :class="[
          classes,
          {
            'bg-white': !classes,
          },
        ]">
        <MPImg
          class="grow h-24"
          :src="`/integrations/${image}`"
          role="none"
          :alt="`${title} image`" />
      </div>

      <div class="border-t dark:bg-zinc-800 p-3 shadow">
        <span
          class="font-bold"
          v-text="title" />

        <Icon
          v-if="internal"
          title="Maintained by MyParcel"
          icon="myparcel"
          class="ml-1 text-xs" />
        <br>
        <Badge
          v-if="!hideType && type"
          v-text="type" />

        <div v-if="repository">
          <Icon icon="github" />
          <AutoLink :item="`https://github.com/${repository}`">
            View on GitHub
          </AutoLink>
        </div>

        <div v-if="documentation">
          <Icon icon="integrations" />
          <AutoLink :item="documentation">
            Documentation
          </AutoLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import AutoLink from '@mptheme/client/components/global/AutoLink.vue';
import Badge from '@mptheme/client/components/global/Badge.vue';
import Icon from '@mptheme/client/components/common/icon/Icon.vue';
import MPImg from '@mptheme/client/components/global/MPImg.vue';
import { defineComponent } from 'vue';
import { useIntegrations } from '@mptheme/client/services/composables/useIntegrations';

export default defineComponent({
  name: 'Integration',
  components: {
    Badge,
    AutoLink,
    Icon,
    MPImg,
  },

  props: {
    name: {
      type: String,
      required: true,
    },

    hideType: Boolean,
  },

  setup: (props) => {
    const integrations = useIntegrations();

    return integrations.value.find(({ name }) => name === props.name);
  },
});
</script>
