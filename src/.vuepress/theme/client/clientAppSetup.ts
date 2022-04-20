import defaultClientAppSetup from '@vuepress/theme-default/lib/client/clientAppSetup';
import { defineClientAppSetup } from '@vuepress/client';

export default defineClientAppSetup(() => {
  defaultClientAppSetup();
});
