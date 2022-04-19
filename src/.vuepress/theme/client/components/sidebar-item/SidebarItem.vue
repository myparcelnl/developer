<template>
  <li>
    <AutoLink
      v-if="item.link"
      class="duration-100 hover:text-goldfish-500 text-inherit transition-colors"
      :class="classes"
      :item="item">
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
          'pl-3': depth > 0,
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
    const isOpen = ref(true);
    const onClick = ref<() => void>();

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
      classes: computed(() => [
        'px-3 py-1 inline-block leading-normal border-l-4 flex',
        {
          'font-bold': depth.value === 0 || (item.value.children ?? []).length > 0,
          'text-xl font-bold': depth.value === 0,
          'border-goldfish-500 text-goldfish-500': depth.value > 0 && isActive.value,
          'border-transparent': depth.value === 0 || !isActive.value,
        },
      ]),
    };
  },
});
</script>
