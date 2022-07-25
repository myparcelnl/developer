<template>
  <div v-if="contributors && contributors.length">
    <span>{{ translate('contributorsText') }}&nbsp;</span>

    <span>
      <template
        v-for="(contributor, index) in contributors"
        :key="index">
        <span
          :title="contributor.email"
          v-text="contributor.name" />
        <template v-if="index !== contributors?.length - 1">, </template>
      </template>
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useContributors } from '@mptheme/client/composables/useContributors';
import { useTranslate } from '@mptheme/client/composables';

export default defineComponent({
  name: 'PageContributors',
  setup: () => ({
    contributors: useContributors(),
    translate: useTranslate(),
  }),
});
</script>
