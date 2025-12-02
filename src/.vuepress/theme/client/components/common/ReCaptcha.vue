<template>
  <VueRecaptcha
    :theme="theme"
    :sitekey="RECAPTCHA_SITE_KEY"
    @verify="$emit('verify', $event)" />
</template>

<script lang="ts">
import {VueRecaptcha} from 'vue-recaptcha';
import {computed, defineComponent} from 'vue';
import {useDark} from '@vueuse/core';

export default defineComponent({
  name: 'ReCaptcha',
  components: {VueRecaptcha},
  emits: ['verify'],
  setup: () => {
    const dark = useDark();

    return {
      RECAPTCHA_SITE_KEY: '6LcoxR4sAAAAANGn5zTRKW8q701mdA4x0EbUomJ6',
      theme: computed((): string => {
        return dark.value ? 'dark' : 'light';
      }),
    };
  },
});
</script>
