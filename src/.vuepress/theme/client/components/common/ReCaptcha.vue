<template>
  <VueRecaptcha
    :theme="theme"
    :sitekey="RECAPTCHA_SITE_KEY"
    @verify="$emit('verify', $event)" />
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { VueRecaptcha } from 'vue-recaptcha';
import { useDarkMode } from '@vuepress/theme-default/lib/client/composables';

export default defineComponent({
  name: 'ReCaptcha',
  components: { VueRecaptcha },
  emits: ['verify'],
  setup: () => {
    const dark = useDarkMode();

    return {
      RECAPTCHA_SITE_KEY: '6Ldfn8cfAAAAAJ-131JCFn9skW7N3k-7B0UKuHBi',
      theme: computed((): string => {
        return dark.value ? 'dark' : 'light';
      }),
    };
  },
});
</script>
