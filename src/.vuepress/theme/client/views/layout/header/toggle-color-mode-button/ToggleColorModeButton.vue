<template>
  <MPButton
    :variant="['iconSm', 'outlineGray']"
    :title="translate('toggleColorMode')"
    :aria-label="translate('toggleColorMode')"
    :icon="dark ? 'moon' : 'sun'"
    @click="toggleColorMode" />
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {useDark} from '@vueuse/core';
import {useTranslate} from '@mptheme/client/composables';
import MPButton from '@mptheme/client/components/common/button/MPButton.vue';

export default defineComponent({
  name: 'ToggleColorModeButton',
  components: {MPButton},
  setup: () => {
    const dark = useDark();
    const translate = useTranslate();

    const toggleColorMode = (): void => {
      dark.value = !dark.value;
    };

    return {
      dark,
      toggleColorMode,
      translate,
    };
  },
});
</script>
