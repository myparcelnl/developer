<template>
  <NavbarDropdown
    v-if="selectLanguage"
    class="flex-grow h-full px-1"
    :item="selectLanguage">
    <template #selected>
      <span class="flex flex-grow h-full">
        <MPImg
          class="m-auto max-w-6"
          :alt="`Current language: ${language.pageLang}`"
          :src="getFlag(language.config.value?.flag)" />
      </span>
    </template>

    <template #child="data">
      <span class="flex">
        {{ data.item.text }}

        <MPImg
          role="none"
          class="pl-2 w-6"
          :alt="language.pageLang.value"
          :src="getFlag(data.item.localeConfig?.flag)" />
      </span>
    </template>
  </NavbarDropdown>
</template>

<script lang="ts">
import MPImg from '@mptheme/client/components/global/MPImg.vue';
import NavbarDropdown from '@mptheme/client/components/navbar-dropdown/NavbarDropdown.vue';
import { defineComponent } from 'vue';
import { useLanguage } from '@mptheme/client/composables/useLanguage';
import { useNavbarSelectLanguage } from '@mptheme/client/composables';

const FLAG_URL = 'https://assets.myparcel.nl/skin/general-images/flags/:locale.png';

export default defineComponent({
  name: 'LanguageDropdown',
  components: {
    MPImg,
    NavbarDropdown,
  },

  setup: () => {
    return {
      getFlag(locale: string) {
        return FLAG_URL.replace(':locale', locale);
      },

      language: useLanguage(),
      selectLanguage: useNavbarSelectLanguage(),
    };
  },
});
</script>
