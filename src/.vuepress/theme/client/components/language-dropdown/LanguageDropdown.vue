<template>
  <NavbarDropdown
    v-if="dropdown && dropdown.children.length"
    :item="dropdown"
    :button-attributes="{
      variant: ['iconSm', 'outlineGray'],
      icon: 'globe',
    }">
    <template #child="{item}">
      <LanguageOption :language="item.language" />
    </template>
  </NavbarDropdown>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {useLanguage, useSwitchLanguage} from '@mptheme/client/composables';
import NavbarDropdown from '@mptheme/client/components/navbar-dropdown/NavbarDropdown.vue';
import LanguageOption from '@mptheme/client/components/language-dropdown/LanguageOption.vue';

export default defineComponent({
  name: 'LanguageDropdown',
  components: {
    LanguageOption,
    NavbarDropdown,
  },

  setup: () => {
    const language = useLanguage();
    const {dropdown} = useSwitchLanguage();

    return {
      currentLanguage: language.current,
      dropdown,
    };
  },
});
</script>
