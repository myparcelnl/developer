<template>
  <div>
    <div
      v-for="child in sidebarItems[0].children"
      :key="child.text">
      <h1 v-text="child.text" />

      {{ child }}
      <!--                        <LinkTree :items="child.children" /> -->
    </div>

    <Content />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { usePageData } from '@vuepress/client';
import { useSidebarItems } from '@vuepress/theme-default/lib/client';

export default defineComponent({
  name: 'IndexContent',
  // components: { LinkTree },

  setup: (props, ctx) => {
    const sidebarItems = useSidebarItems();
    const page = usePageData();

    // console.log(sidebarItems, page);
    return { sidebarItems, page };
  },
});
</script>
