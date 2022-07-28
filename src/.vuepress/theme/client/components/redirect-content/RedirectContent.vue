<template>
  <p
    role="alert"
    v-text="translate('page_available_in_other_language')" />
</template>

<script lang="ts">
import { computed, defineComponent, toRefs } from 'vue';
import { useLocaleLink, useTranslate } from '@mptheme/client/composables';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'RedirectContent',

  props: {
    to: {
      type: String,
      required: true,
    },
  },

  setup: (props) => {
    const reactiveProps = toRefs(props);
    const translate = useTranslate();
    const router = useRouter();

    // Page renders content for SEO purposes.
    const linkItem = computed(() => {
      const link = useLocaleLink(`/${reactiveProps.to.value}/`);

      return {
        ...link,
        text: translate('page_available_in_other_language_link').replace(':language', link.text),
      };
    });

    void router.replace(reactiveProps.to.value);

    return { linkItem, translate };
  },
});
</script>
