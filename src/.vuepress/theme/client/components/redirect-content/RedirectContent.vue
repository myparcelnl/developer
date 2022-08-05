<template>
  <template v-if="dropdown">
    <p
      role="alert"
      v-text="translate('pageAvailableInOtherLanguages')" />

    <ul>
      <li
        v-for="(item, index) in dropdown?.children"
        :key="`redirect-${index}`">
        <AutoLink
          :item="{
            text: item.language.human,
            link: item.link,
          }">
          <LanguageOption :language="item.language" />
        </AutoLink>
      </li>
    </ul>
  </template>
</template>

<script lang="ts">
import { useSwitchLanguage, useTranslate } from '@mptheme/client/composables';
import AutoLink from '@mptheme/client/components/global/AutoLink.vue';
import LanguageOption from '@mptheme/client/components/language-dropdown/LanguageOption.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'RedirectContent',
  components: { LanguageOption, AutoLink },

  setup: () => {
    const translate = useTranslate();
    const { dropdown } = useSwitchLanguage();

    return { dropdown, translate };
  },
});
</script>
