<template>
  <Stack class="grid-cols-2 lg:grid-cols-4 md:grid-cols-3">
    <Integration
      v-for="integration in integrations"
      :key="integration.name"
      :integration="integration" />
  </Stack>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {useIntegrations} from '@mptheme/client/composables/useIntegrations';
import Stack from '@mptheme/client/components/global/Stack.vue';
import Integration from '@mptheme/client/components/global/Integration.vue';

export default defineComponent({
  name: 'Integrations',
  components: {
    Stack,
    Integration,
  },

  props: {
    type: {
      type: String,
      default: null,
    },

    internal: {
      type: Boolean,
    },
  },

  setup: (props) => {
    const integrations = useIntegrations();

    return {
      integrations: integrations.value
        .sort((integrationA, integrationB) => {
          return Number(integrationB.internal) - Number(integrationA.internal);
        })
        .filter((integration) => {
          let match = true;

          if (props.internal && !integration.internal) {
            match = false;
          }

          if (props.type && props.type !== integration.type) {
            match = false;
          }

          return match;
        }),
    };
  },
});
</script>
