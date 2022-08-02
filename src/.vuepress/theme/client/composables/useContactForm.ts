import { Ref, ref } from 'vue';
import { MessageItem } from '@mptheme/client/services/tailwind/variants/messageTextVariant';
import { isOfType } from '@mptheme/client/utils/type-guard/isOfType';
import { useGoogleTagManager } from '../../../gtmPlugin/src/client/composables/useGoogleTagManager';
import { useTranslate } from '@mptheme/client/composables/useTranslate';

type UseContactForm = (
  refs: Ref<Record<string, string>>,
  messages: Ref<MessageItem[]>,
  initialValue: Record<string, string>
) => {
  loading: Ref<boolean>;
  onSubmit: () => Promise<void>;
  verify: (token: string) => void;
};

// eslint-disable-next-line max-lines-per-function
export const useContactForm: UseContactForm = (refs, messages, initialValue) => {
  const translate = useTranslate();
  const loading = ref(false);
  const recaptchaToken = ref<string>();

  const gtm = useGoogleTagManager();

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
      const response = await fetch('aaa', {
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
      gtm.sendEvent('submit', { data: refs.value });
    } catch (e) {
      if (isOfType<Error>(e, 'message')) {
        messages.value.push({ type: 'error', message: translate(e.message) });
      }
    }

    loading.value = false;
  };

  const verify: (token: string) => void = (token: string) => {
    messages.value = [];
    recaptchaToken.value = token;
  };

  return { loading, onSubmit, verify };
};
