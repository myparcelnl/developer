import { ComputedRef, Ref, computed, ref, watch } from 'vue';
import { ResolvedSidebarItem, useSidebarItems } from '@vuepress/theme-default/lib/client';
import { ADDITIONAL_LOCALES } from '../../../shared/locales/localeData';
import { useNavbarConfig } from '@mptheme/client/services/composables/useNavbarConfig';
import { useRoute } from 'vue-router';
import { useBreakpoints } from '@mptheme/client/composables';

let isOpen: ComputedRef<boolean>;

let toggled: Ref<boolean>;

type UseSidebar = () => {
  exists: ComputedRef<boolean>;
  isNavbar: ComputedRef<boolean>;
  isOpen: Ref<boolean>;
  items: ComputedRef<ResolvedSidebarItem[]>;
  toggle: () => void;
  toggled: Ref<boolean>;
};

export const useSidebar: UseSidebar = () => {
  const route = useRoute();
  const sidebar = useSidebarItems();
  const navbar = useNavbarConfig();
  const isNavbar = computed(() => !sidebar.value.length);

  const sidebarItems = computed(() => {
    if (sidebar.value?.[0]?.text && ADDITIONAL_LOCALES.includes(sidebar.value[0].text)) {
      // console.log(JSON.stringify(sidebar.value[0]?.children, null, 2));
      return sidebar.value[0]?.children?.[0]?.children ?? [];
    }

    // console.log(JSON.stringify(sidebar.value, null, 2));

    return isNavbar.value ? navbar.value : sidebar.value;
  });

  const exists = computed(() => {
    return sidebarItems.value.length > 0;
  });
  const { lg } = useBreakpoints();

  toggled ??= ref(false);
  isOpen ??= computed(() => {
    const renderByView = lg.value && !isNavbar.value;

    return exists.value && (renderByView || toggled.value);
  });

  const toggle = (): void => {
    toggled.value = !toggled.value;
  };

  watch(
    () => route.path,
    () => {
      if (toggled.value) {
        toggle();
      }
    },
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
