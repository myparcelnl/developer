<template>
  <AutoLink
    :item="editNavLink"
    class="bg-goldfish-500 p-1 px-3 rounded-full" />
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
