<template>
  <form @submit.prevent="onSubmit">
    <input
      v-model="name"
      type="text">
    <input
      v-model="email"
      type="text">
    <select v-model="subject">
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
        v-text="option.label" />
    </select>

    <textarea v-model="message" />

    <MPButton
      type="submit"
      class="g-recaptcha"
      data-sitekey="reCAPTCHA_site_key"
      data-callback="onSubmit"
      data-action="submit" />
  </form>
</template>

<script lang="ts">
import { defineComponent, toRefs } from 'vue';
import MPButton from '@mptheme/client/components/common/button/MPButton.vue';

const RECAPTCHA_SITE_KEY = '6Ld0vq8fAAAAAIv7g9GyP_genyIs0olxPD37FofI';

export default defineComponent({
  name: 'ContactForm',
  components: { MPButton },
  setup: () => {
    const refs = toRefs({
      name: undefined,
      email: undefined,
      subject: undefined,
      message: undefined,
    });

    return {
      ...refs,
      options: [
        {

        },
      ],

      onSubmit(event: SubmitEvent) {
        console.log(event);
      },
    };
  },
});
</script>
