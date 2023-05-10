<template>
  <div
    class="min-h-full"
    :class="{
      'lg:pl-80': sidebar.exists,
      'transition-all': isMounted,
    }">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import {useMounted} from '@vueuse/core';
import {useSidebar} from '../../../composables';

const sidebar = useSidebar();
const isMounted = useMounted();
</script>
