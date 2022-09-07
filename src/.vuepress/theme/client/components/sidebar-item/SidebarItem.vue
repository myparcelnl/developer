<template>
  <li v-if="sidebarDepth >= depth">
    <AutoLink
      v-if="item.link"
      :class="classes"
      :item="item"
      @click="sidebarToggled ? toggleSidebar : null">
      {{ item.text }}

      <ToggleChevron
        v-if="item.collapsible"
        class="ml-auto"
        :toggle="isOpen" />
    </AutoLink>

    <p
      v-else
      :class="classes"
      tabindex="0"
      @click="onClick"
      @keydown.enter="onClick">
      {{ item.text }}

      <ToggleChevron
        v-if="item.collapsible"
        class="ml-auto"
        :toggle="isOpen" />
    </p>

    <Transition v-if="item.children?.length">
      <ul
        v-if="item.children?.length"
        v-show="isOpen"
        :class="{
          'pl-3 ml-0.5 border-l': depth > 0,
          'text-sm': depth > 1,
        }">
        <SidebarItem
          v-for="child in item.children"
          :key="`${depth}${child.text}${child.link}`"
          :item="child"
          :depth="depth + 1" />
      </ul>
    </Transition>
  </li>
</template>

<script lang="ts">
import { PropType, computed, defineComponent, ref, toRefs } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { MyPaResolvedSidebarItem } from '@mptheme/config.types';
import { ResolvedSidebarItem } from 'vuepress';
import ToggleChevron from '@mptheme/client/components/common/ToggleChevron.vue';
import { isActiveSidebarItem } from '@vuepress/theme-default/lib/client';
import { usePageFrontmatter } from '@vuepress/client';
import { useSidebar } from '@mptheme/client/composables/sidebar';

export default defineComponent({
  name: 'SidebarItem',

  components: {
    ToggleChevron,
  },

  props: {
    item: {
      type: Object as PropType<MyPaResolvedSidebarItem>,
      required: true,
    },

    depth: {
      type: Number,
      required: false,
      default: 0,
    },
  },

  setup: (props) => {
    const { item, depth } = toRefs(props);
    const route = useRoute();
    const router = useRouter();
    const isActive = computed(() => isActiveSidebarItem(item.value as ResolvedSidebarItem, route));
    const onClick = ref<() => void>();

    const frontmatter = usePageFrontmatter();

    const sidebarDepth = computed<number>(() => {
      return Number(frontmatter.value.sidebarDepth ?? Infinity);
    });

    const {
      toggle: toggleSidebar,
      toggled: sidebarToggled,
    } = useSidebar();
    const isOpen = ref(true);

    if (item.value.collapsible) {
      isOpen.value = isActive.value;

      onClick.value = () => {
        isOpen.value = !isOpen.value;
      };

      router.afterEach(() => {
        isOpen.value = isActive.value;
      });
    }

    return {
      isActive,
      isOpen,
      onClick,
      sidebarDepth,
      sidebarToggled,
      toggleSidebar,
      classes: computed(() => [
        'py-1 flex transition-all duration-100 sidebar-item',
        {
          'sidebar-item--has-children': item.value.children?.length,
          'text-goldfish-500 sidebar-item--active': depth.value > 0 && isActive.value,
          'border-transparent': depth.value === 0 || !isActive.value,
        },
      ]),
    };
  },
});
</script>
