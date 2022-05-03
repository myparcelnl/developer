import { defineClientAppSetup } from '@vuepress/client';
import { setupDarkMode } from '@vuepress/theme-default/lib/client';
import { setupSidebarItems } from '@vuepress/theme-default/lib/client/composables/useSidebarItems';

export default defineClientAppSetup(() => {
  setupSidebarItems();
  setupDarkMode();
});
