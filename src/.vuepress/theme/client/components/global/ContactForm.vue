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
      :label="translate('contactForm.name')" />

    <FormInput
      id="email"
      v-model.trim="refs.email"
      type="email"
      :label="translate('contactForm.email')" />

    <FormSelect
      id="subject"
      v-model.trim="refs.subject"
      :options="subjects"
      empty-option
      :label="translate('contactForm.subject')" />

    <FormTextArea
      id="message"
      v-model.trim="refs.message"
      :label="translate('contactForm.message')" />

    <FormField>
      <ReCaptcha
        class="pb-3"
        @verify="verify" />

      <MPButton
        :disabled="loading"
        type="submit">
        {{ translate('submit') }}
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
import { isOfType } from '@mptheme/client/utils/type-guard/isOfType';
import { useTranslate } from '@mptheme/client/composables/useTranslate';

export default defineComponent({
  name: 'ContactForm',
  components: { Message, ReCaptcha, FormField, FormTextArea, FormSelect, FormInput, MPButton },
  // eslint-disable-next-line max-lines-per-function
  setup: () => {
    const initialValue = {
      name: '',
      email: '',
      subject: '',
      message: '',
    };
    const refs = ref(initialValue);
    const recaptchaToken = ref<string>();
    const loading = ref(false);
    const messages = ref<{ type: string; message: string }[]>([]);
    const translate = useTranslate();

    const onSubmit = async() => {
      if (loading.value) {
        return;
      }

      messages.value = [];

      if (!recaptchaToken.value) {
        messages.value.push({ type: 'error', message: translate('errorCaptchaInvalid') });
        return;
      }

      loading.value = true;

      try {
        const response = await fetch('https://vqthadq4nvo5i2cgvxpu3xw3zm0qxquc.lambda-url.eu-central-1.on.aws', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...refs.value,
            recaptchaToken: recaptchaToken.value,
          }),
        });

        if (!response.ok) {
          const json = await response.json();
          json.data.errors.messages.forEach((message: string) => {
            messages.value.push({ type: 'error', message: translate(message) });
          });
          return;
        }

        messages.value.push({
          type: 'success',
          message: translate('messageSubmitted'),
        });

        refs.value = initialValue;
      } catch (e) {
        if (isOfType<Error>(e, 'message')) {
          messages.value.push({ type: 'error', message: translate(e.message) });
        }
      }

      loading.value = false;
    };

    return {
      refs,
      loading,
      translate,
      messages,
      onSubmit,
      verify: (token: string) => {
        messages.value = [];
        recaptchaToken.value = token;
      },

      subjects: [
        'feature_request',
        'integration_request',
        'bug',
        'partnership',
        'security',
        'other',
      ].map((key: string) => ({
        name: key,
        label: translate(`contactForm.subject.${key}`),
      })),
    };
  },
});
</script>
