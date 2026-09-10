<template>
  <ClientOnly>
    <div
      v-for="child in sidebarItems?.[0].children ?? []"
      :key="child.text">
      <h1 v-text="child.text" />

      <LinkTree
        :items="child.children"
        class="dark:text-inherit pl-2 text-inherit" />
    </div>

    <Content />
  </ClientOnly>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {ClientOnly, usePageData} from '@vuepress/client';
import {useSidebarItems} from '@mptheme/client/composables';
import LinkTree from '@mptheme/client/components/common/LinkTree.vue';

export default defineComponent({
  name: 'IndexContent',
  components: {LinkTree, ClientOnly},
  setup: () => {
    const sidebarItems = useSidebarItems();
    const page = usePageData();

    return {sidebarItems, page};
  },
});
</script>
