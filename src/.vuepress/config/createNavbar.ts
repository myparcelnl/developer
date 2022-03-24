import {NavbarConfig} from '@vuepress/theme-default';

/**
 *
 */
export function createNavbar(): NavbarConfig {
  return [
    'API Reference',
    'Documentation',
    {
      text: 'Integrations',
      children: [],
    },
  ];
}
