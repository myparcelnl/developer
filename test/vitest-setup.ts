import {clientDataSymbol} from 'vuepress/client';
import {createMemoryHistory, createRouter} from 'vue-router';
import {computed} from 'vue';
import {config} from '@vue/test-utils';
import {sidebarItemsSymbol} from '@mptheme/client/composables/sidebar/sidebarItemsSymbol';
import {testIdPlugin} from './vue-test-utils/testIdPlugin';

config.plugins.VueWrapper.install(testIdPlugin);

// Components read the current route through vue-router, so every mount needs
// a router instance.
const router = createRouter({
  history: createMemoryHistory(),
  routes: [{path: '/:catchAll(.*)', component: {render: (): null => null}}],
});

config.global.plugins = [...(config.global.plugins ?? []), router];

const siteData = {
  base: '/' as const,
  lang: 'en-US',
  title: '',
  description: '',
  head: [],
  locales: {},
};

const pageData = {
  path: '/',
  title: '',
  lang: 'en-US',
  frontmatter: {},
  headers: [],
  filePathRelative: null,
};

// The specs mount components outside a vuepress app, so the injections that
// vuepress provides on createVueApp do not exist. Provide them here.
config.global.provide = {
  ...config.global.provide,
  [clientDataSymbol as symbol]: {
    layouts: computed(() => ({})),
    pageComponent: computed(() => null),
    pageData: computed(() => pageData),
    pageFrontmatter: computed(() => ({})),
    pageHead: computed(() => []),
    pageHeadTitle: computed(() => ''),
    pageLang: computed(() => 'en-US'),
    pageLayout: computed(() => null),
    redirects: computed(() => ({})),
    routeLocale: computed(() => '/'),
    routePath: computed(() => '/'),
    routes: computed(() => ({})),
    siteData: computed(() => siteData),
    siteLocaleData: computed(() => siteData),
  },
  [sidebarItemsSymbol as symbol]: computed(() => [{text: 'Section', link: '/', children: []}]),
};

// <ClientOnly> renders its slot after onMounted, which a synchronous mount
// does not reach. Render the slot directly.
config.global.stubs = {
  ...config.global.stubs,
  ClientOnly: {template: '<div><slot /></div>'},
};
