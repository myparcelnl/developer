<template>
  <div
    v-if="exists"
    class="cursor-pointer flex lg:hidden p-3"
    :title="translate('toggleSidebar')"
    :aria-label="translate('toggleSidebar')"
    aria-expanded="false"
    role="button"
    tabindex="0"
    @click="() => toggle()">
    <div
      role="none"
      class="flex flex-col h-6 items-center justify-around w-6"
      aria-hidden="true"
      tabindex="-1">
      <span
        role="none"
        :class="[burgerClasses, {'-rotate-45 translate-y-2': toggled}]" />
      <span
        role="none"
        :class="[burgerClasses, {'scale-x-0': toggled}]" />
      <span
        role="none"
        :class="[burgerClasses, {'rotate-45 -translate-y-2': toggled}]" />
    </div>
  </div>
</template>

<script setup lang="ts">
import {useSidebar, useTranslate} from '../../../../composables';

const {toggled, toggle, exists} = useSidebar();

const translate = useTranslate();

const burgerClasses = [
  'bg-black',
  'dark:bg-white',
  'duration-100',
  'h-0.5',
  'inline-block',
  'rounded-lg',
  'transition-transform',
  'w-full',
];
</script>
