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
import { isOfType } from '@mptheme/client/utils/type-guard/isOfType';
import { useSiteLocaleData } from '@mptheme/client/services/composables/useSiteLocaleData';

export default defineComponent({
  name: 'ContactForm',
  components: { Message, ReCaptcha, FormField, FormTextArea, FormSelect, FormInput, MPButton },
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
    const localeData = useSiteLocaleData();
    const messages = ref<{ type: string; message: string }[]>([]);

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

      let response;

      try {
        response = await fetch('https://vqthadq4nvo5i2cgvxpu3xw3zm0qxquc.lambda-url.eu-central-1.on.aws', {
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
          messages.value.push({ type: 'error', message: json });
          return;
        }

        messages.value.push({
          type: 'success',
          message: localeData.value.message_submitted,
        });

        refs.value = initialValue;
      } catch (e) {
        if (isOfType<Error>(e, 'message')) {
          messages.value.push({ type: 'error', message: e.message });
        }
      }

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
          name: 'feature_request',
          label: 'Feature request',
        },
        {
          name: 'integration_request',
          label: 'Integration request',
        },
        {
          name: 'bug',
          label: 'Bug report',
        },
        {
          name: 'partnership',
          label: 'Partnership',
        },
        {
          name: 'security',
          label: 'Security issue',
        },
        {
          name: 'other',
          label: 'Other',
        },
      ],
    };
  },
});
</script>
