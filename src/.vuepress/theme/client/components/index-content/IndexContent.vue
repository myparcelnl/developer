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
import { ClientOnly, usePageData } from '@vuepress/client';
import LinkTree from '@mptheme/client/components/common/LinkTree.vue';
import { defineComponent } from 'vue';
import { useSidebarItems } from '@vuepress/theme-default/lib/client';

export default defineComponent({
  name: 'IndexContent',
  components: { LinkTree, ClientOnly },
  setup: () => {
    const sidebarItems = useSidebarItems();
    const page = usePageData();

    // console.log(sidebarItems, page);
    return { sidebarItems, page };
  },
});
</script>
