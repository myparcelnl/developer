import { PAGE_API_REFERENCE, PAGE_DOCUMENTATION, PAGE_INTEGRATIONS } from './pages';
import { SidebarConfig } from '@vuepress/theme-default';

const pages = [PAGE_DOCUMENTATION, PAGE_API_REFERENCE, PAGE_INTEGRATIONS];

/**
 *
 */
export function createSidebar(): SidebarConfig {
  return {
    [PAGE_DOCUMENTATION]: [
      {
        text: 'test',
        children: [],
      },
    ],
  };
}
