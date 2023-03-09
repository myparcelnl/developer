import { ComputedRef, Ref, computed, ref, watch } from 'vue';
import { useBreakpoints, useNavbarConfig } from '@mptheme/client/composables';
import { MyPaResolvedSidebarItem } from '@mptheme/config.types';
import { createGlobalState } from '@vueuse/core';
import { useRoute } from 'vue-router';
import { useSidebarItems } from './useSidebarItems';

type UseSidebar = () => {
  exists: ComputedRef<boolean>;
  isNavbar: ComputedRef<boolean>;
  items: ComputedRef<MyPaResolvedSidebarItem[]>;
  toggle: (bool?: boolean) => void;
  toggled: Ref<boolean>;
};

const useSidebarToggled = createGlobalState(() => ref(false));

export const useSidebar: UseSidebar = () => {
  const toggled = useSidebarToggled();
  const route = useRoute();
  const items = useSidebarItems();
  const navbar = useNavbarConfig();
  const { lg } = useBreakpoints();

  const isNavbar = computed(() => !items.value.length);

  const sidebarItems = computed(() => {
    return items.value.length ? items.value : navbar.value;
  });

  const exists = computed(() => (sidebarItems.value?.length ?? 0) > 0);
  const toggle = (bool?: boolean): void => {
    toggled.value = bool ?? !toggled.value;
  };

  watch(
    [() => route.path, lg],
    () => toggle(false),
  );

  return {
    exists,
    isNavbar,
    items: sidebarItems,
    toggle,
    toggled,
  };
};
