<template>
  <div v-if="contributors && contributors.length">
    <span>{{ themeLocale.contributorsText }}: </span>

    <span>
      <template
        v-for="(contributor, index) in contributors"
        :key="index">
        <span
          :title="`email: ${contributor.email}`"
          v-text="contributor.name" />
        <template v-if="index !== contributors.length - 1">, </template>
      </template>
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useContributors } from '@mptheme/client/services/composables/useContributors';
import { useThemeLocaleData } from '@mptheme/client/services/composables/useThemeLocaleData';

export default defineComponent({
  name: 'PageContributors',
  setup: () => ({
    contributors: useContributors(),
    themeLocale: useThemeLocaleData(),
  }),
});
</script>
