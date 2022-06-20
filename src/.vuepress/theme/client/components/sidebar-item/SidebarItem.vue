<template>
  <li>
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

    <DropdownTransition v-if="item.children?.length">
      <ul
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
    </DropdownTransition>
  </li>
</template>

<script lang="ts">
import { PropType, computed, defineComponent, ref, toRefs } from 'vue';
import { ResolvedSidebarItem, isActiveSidebarItem } from '@vuepress/theme-default/lib/client';
import { useRoute, useRouter } from 'vue-router';
import DropdownTransition from '@theme/DropdownTransition.vue';
import ToggleChevron from '@mptheme/client/components/common/ToggleChevron.vue';
import { useSidebar } from '@mptheme/client/services/composables/useSidebar';

export default defineComponent({
  name: 'SidebarItem',

  components: {
    ToggleChevron,
    DropdownTransition,
  },

  props: {
    item: {
      type: Object as PropType<ResolvedSidebarItem>,
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
    const isActive = computed(() => isActiveSidebarItem(item.value, route));
    const onClick = ref<() => void>();

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
      isOpen,
      isActive,
      onClick,
      toggleSidebar,
      sidebarToggled,
      classes: computed(() => [
        'py-1 flex transition-all duration-100',
        {
          'sidebar-item--has-children': item.value.children?.length,
          'text-xl font-bold leading-8 page-parent': depth.value === 0,
          'text-goldfish-500 sidebar-item--active': depth.value > 0 && isActive.value,
          'border-transparent': depth.value === 0 || !isActive.value,
        },
      ]),
    };
  },
});
</script>
