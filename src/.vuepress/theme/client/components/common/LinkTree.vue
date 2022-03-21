<!-- eslint-disable vue/no-duplicate-attr-inheritance -->
<template>
  <template
    v-for="item in items"
    :key="item.link">
    <div class="leading-6">
      <AutoLink
        v-if="item.text && item.link"
        v-bind="$attrs"
        :key="item.link"
        :class="{
          'text-lg pb-2 pt-3 font-bold': item.children,
        }"
        :item="item" />

      <p
        v-else-if="item.text"
        class="font-bold text-lg"
        v-text="item.text" />
    </div>

    <LinkTree
      v-if="item.children"
      v-bind="
        $attrs"
      :items="item.children" />
  </template>
</template>

<script lang="ts">
import { PropType, defineComponent } from 'vue';
import AutoLink from '../auto-link/AutoLink.vue';
import { NavbarConfigArray } from '@mptheme/config.types';

export default defineComponent({
  name: 'LinkTree',
  components: { AutoLink },
  props: {
    items: {
      type: Array as PropType<NavbarConfigArray>,
      required: true,
    },
  },
});
</script>
