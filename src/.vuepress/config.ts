import { DefaultThemeOptions, defineUserConfig } from 'vuepress';
import { createNavbar } from './config/createNavbar';
import { head } from './config/head';
import { path } from '@vuepress/utils';
import { plugins } from './config/plugins';

const themeComponents = path.resolve(__dirname, 'components', 'theme');

export default defineUserConfig<DefaultThemeOptions>({
  title: 'MyParcel Developer Portal',

  // theme: path.resolve(__dirname, '..', '..', 'theme'),
  description: '',
  clientAppEnhanceFiles: path.resolve(__dirname, './config/enhanceApp.ts'),

  head,

  /**
   * @see https://v2.vuepress.vuejs.org/guide/plugin.html#community-plugin
   */
  plugins,

  /**
   * @see https://v2.vuepress.vuejs.org/reference/default-theme/config.html
   */
  themeConfig: {
    contributors: false,
    docsBranch: 'main',
    docsDir: '/src/',
    editLinks: true,
    logo: 'images/logo.svg',
    logoDark: 'images/logo_dark.svg',
    repo: 'https://github.com/myparcelnl/developer-portal',
    navbar: createNavbar(),
    // sidebar: createSidebar(),
  },

  bundlerConfig: {
    viteOptions: {
      ...process.env.DOCKER
        ? {
          server: {
            hmr: {
              port: 443,
            },
          },
        }
        : {},

      css: {
        postcss: {
          plugins: [
            require('tailwindcss')(
              path.resolve(__dirname, 'tailwind.config.js'),
            ),
            require('autoprefixer'),
          ],
        },
      },
    },
  },

  alias: {
    // '@docsearch/Navbar.vue': path.resolve(themeComponents, 'MyHeader.vue'),
  },

  // global
  // AutoLink.vue
  // DropdownTransition.vue
  // Home.vue
  // HomeContent.vue
  // HomeFeatures.vue
  // HomeFooter.vue
  // HomeHero.vue
  // Navbar.vue
  // NavbarBrand.vue
  // NavbarDropdown.vue
  // NavbarItems.vue
  // Page.vue
  // PageMeta.vue
  // PageNav.vue
  // Sidebar.vue
  // SidebarItem.vue
  // SidebarItems.vue
  // ToggleDarkModeButton.vue
  // ToggleSidebarButton.vue

  port: 8955,
});
