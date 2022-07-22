<template>
  <MPButton
    :link="editNavLink"
    :variant="['light', 'sm']"
    icon="github" />
</template>

<script lang="ts">
import MPButton from '@mptheme/client/components/common/button/MPButton.vue';
import { defineComponent } from 'vue';
import { useEditNavLink } from '@mptheme/client/composables/useEditNavLink';

export default defineComponent({
  name: 'PageEditLink',
  components: { MPButton },
  setup: () => ({
    editNavLink: useEditNavLink(),
  }),
});
</script>
