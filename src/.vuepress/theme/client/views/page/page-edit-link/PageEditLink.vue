<template>
  <AutoLink :item="editNavLink" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useEditNavLink } from '@mptheme/client/services/composables/useEditNavLink';

export default defineComponent({
  name: 'PageEditLink',

  setup: () => ({
    editNavLink: useEditNavLink(),
  }),
});
</script>
