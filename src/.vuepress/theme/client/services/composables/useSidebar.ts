import { ComputedRef, Ref, computed, ref } from 'vue';
import { ResolvedSidebarItem, useSidebarItems } from '@vuepress/theme-default/lib/client';
import { useBreakpoints } from '@mptheme/client/services/composables/useBreakpoints';

let isOpen: ComputedRef<boolean>;

let toggled: Ref<boolean>;

type UseSidebar = () => {
  isOpen: Ref<boolean>;
  exists: ComputedRef<boolean>;
  toggled: Ref<boolean>;
  toggle: () => void;
  items: ComputedRef<ResolvedSidebarItem[]>;
};

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
    toggled,
    toggle(): void {
      toggled.value = !toggled.value;
    },
  };
};
