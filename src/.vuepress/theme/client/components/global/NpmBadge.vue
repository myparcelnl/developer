<template>
  <AutoLink
    :item="{ link: `https://npmjs.com/${name}` }"
    class="flex">
    <img
      v-for="(type, index) in ['v', 'dm', 'types', 'dependents']"
      :key="`${type}_${name}`"
      :class="{ 'ml-1': index > 0 }"
      :src="`https://badgen.net/npm/${type}/${name}`"
      :alt="`${name} ${type} badge`"
      role="none">
  </AutoLink>
</template>

<script lang="ts">
import AutoLink from '@mptheme/client/components/global/AutoLink.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NpmBadge',
  components: { AutoLink },
  props: {
    name: {
      type: String,
      required: true,
    },
  },
});
</script>
