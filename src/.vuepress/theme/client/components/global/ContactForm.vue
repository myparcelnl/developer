<template>
  <form
    class="gap-3 grid"
    @submit.prevent="onSubmit">
    <Message
      v-for="message in messages"
      :key="message"
      :type="message.type">
      {{ message.message }}
    </Message>

    <FormInput
      id="name"
      v-model.trim="refs.name"
      autocomplete="name"
      label="Name" />

    <FormInput
      id="email"
      v-model.trim="refs.email"
      type="email"
      label="Email" />

    <FormSelect
      id="subject"
      v-model.trim="refs.subject"
      :options="subjects"
      empty-option
      label="Subject" />

    <FormTextArea
      id="message"
      v-model.trim="refs.message"
      label="Message" />

    <FormField>
      <ReCaptcha
        class="pb-3"
        @verify="verify" />

      <MPButton
        :disabled="loading"
        type="submit">
        {{ localeData.submit }}
      </MPButton>
    </FormField>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import FormField from '@mptheme/client/components/global/FormField.vue';
import FormInput from '@mptheme/client/components/global/FormInput.vue';
import FormSelect from '@mptheme/client/components/global/FormSelect.vue';
import FormTextArea from '@mptheme/client/components/global/FormTextArea.vue';
import MPButton from '@mptheme/client/components/common/button/MPButton.vue';
import Message from '@mptheme/client/components/global/Message.vue';
import ReCaptcha from '@mptheme/client/components/common/ReCaptcha.vue';
import { useSiteLocaleData } from '@mptheme/client/services/composables/useSiteLocaleData';

export default defineComponent({
  name: 'ContactForm',
  components: { Message, ReCaptcha, FormField, FormTextArea, FormSelect, FormInput, MPButton },
  setup: () => {
    const recaptchaToken = ref<string>();
    const loading = ref(false);
    const localeData = useSiteLocaleData();
    const messages = ref<{ type: string; message: string }[]>([]);

    const refs = ref({
      name: null,
      email: null,
      subject: null,
      message: null,
    });

    const onSubmit = async() => {
      if (loading.value) {
        return;
      }

      messages.value = [];

      if (!recaptchaToken.value) {
        messages.value.push({ type: 'error', message: localeData.value.error_captcha_invalid });
        return;
      }

      loading.value = true;

      const res = await fetch('https://vqthadq4nvo5i2cgvxpu3xw3zm0qxquc.lambda-url.eu-central-1.on.aws', {
        method: 'POST',
        body: JSON.stringify({
          ...refs,
          recaptchaToken: recaptchaToken.value,
        }),
      });

      if (!res.ok) {
        const json = await res.json();
        messages.value.push({ type: 'error', message: json });
        loading.value = false;
        return;
      }

      messages.value.push({
        type: 'success',
        message: localeData.value.message_submitted,
      });

      refs.value.name = null;
      refs.value.email = null;
      refs.value.subject = null;
      refs.value.message = null;

      loading.value = false;
    };

    return {
      refs,
      loading,
      localeData,
      messages,
      onSubmit,
      verify: (token: string) => {
        messages.value = [];
        recaptchaToken.value = token;
      },

      subjects: [
        {
          name: 'bug',
          label: 'Bug',
        },
        {
          name: 'security',
          label: 'Security issue',
        },
      ],
    };
  },
});
</script>
