import { computed, ComputedRef, ref } from 'vue';
import { ResolvedSidebarItem, useSidebarItems } from '@vuepress/theme-default/lib/client';
import { Ref } from '@vue/runtime-core';
import { useBreakpoints } from '@mptheme/client/services/composables/useBreakpoints';

let isOpen: ComputedRef<boolean>;

let toggled: Ref<boolean>;

type UseSidebar = () => {
  isOpen: Ref<boolean>,
  exists: ComputedRef<boolean>,
  toggle: () => void
  items: ComputedRef<ResolvedSidebarItem[]>
}

export const useSidebar: UseSidebar = () => {
  const sidebarItems = useSidebarItems();
  const exists = computed(() => sidebarItems.value.length > 0);
  const { lg } = useBreakpoints();

  toggled ??= ref(false);
  isOpen ??= computed(() => exists.value && (lg.value || toggled.value));

  return {
    items: sidebarItems,
    isOpen,
    exists,
    toggle() {
      toggled.value = !toggled.value;
    },
  };
};
