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
      RECAPTCHA_SITE_KEY: '6Lc--NkqAAAAAE7zbUTUww4HZUSZ5b5ZIvdRKVz9',
      theme: computed((): string => {
        return dark.value ? 'dark' : 'light';
      }),
    };
  },
});
</script>
