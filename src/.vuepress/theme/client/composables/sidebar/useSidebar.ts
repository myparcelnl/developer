import { ComputedRef, Ref, computed, ref, watch } from 'vue';
import { MyPaResolvedSidebarItem } from '@mptheme/config.types';
import { useBreakpoints } from '@mptheme/client/composables/useBreakpoints';
import { useNavbarConfig } from '@mptheme/client/composables/navbar/useNavbarConfig';
import { useRoute } from 'vue-router';
import { useSidebarItems } from './useSidebarItems';

let isOpen: ComputedRef<boolean>;

let toggled: Ref<boolean>;

type UseSidebar = () => {
  exists: ComputedRef<boolean>;
  isNavbar: ComputedRef<boolean>;
  isOpen: Ref<boolean>;
  items: ComputedRef<MyPaResolvedSidebarItem[]>;
  toggle: (bool?: boolean) => void;
  toggled: Ref<boolean>;
};

export const useSidebar: UseSidebar = () => {
  const route = useRoute();
  const items = useSidebarItems();
  const navbar = useNavbarConfig();
  const { lg } = useBreakpoints();
  const isNavbar = computed(() => !items.value.length);

  toggled ??= ref(false);

  isOpen ??= computed(() => {
    const renderByView = lg.value && !isNavbar.value;

    return exists.value && (renderByView || toggled.value);
  });

  const sidebarItems = computed(() => {
    return items.value.length
      ? items.value
      : navbar.value;
  });

  const exists = computed(() => {
    return sidebarItems.value.length > 0;
  });

  const toggle = (bool?: boolean): void => {
    toggled.value = bool ?? !toggled.value;
  };

  watch(
    () => route.path,
    () => toggle(false),
  );

  return {
    items: sidebarItems,
    isOpen,
    isNavbar,
    exists,
    toggled,
    toggle,
  };
};
