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
        :aria-label="translate('submit')"
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
import { MessageItem } from '@mptheme/client/services/tailwind/variants/messageTextVariant';
import ReCaptcha from '@mptheme/client/components/common/ReCaptcha.vue';
import { useContactForm } from '@mptheme/client/composables/useContactForm';
import { useTranslate } from '@mptheme/client/composables';

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
    const messages = ref<MessageItem[]>([]);
    const translate = useTranslate();

    const { loading, onSubmit, verify } = useContactForm(refs, messages, initialValue);

    return {
      loading,
      messages,
      onSubmit,
      refs,
      translate,
      verify,

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
