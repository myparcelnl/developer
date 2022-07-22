import { DefaultThemeNormalPageFrontmatter, DefaultThemePageData } from '@vuepress/theme-default/lib/shared';
import PageContributors from '@mptheme/client/views/page/page-contributors/PageContributors.vue';
import { shallowMount } from '@vue/test-utils';

vi.mock('@vuepress/client', () => ({
  usePageData: vi.fn((): DefaultThemePageData => ({
    git: {
      createdTime: new Date('2022-04-02 10:40:22').getTime(),
      updatedTime: new Date('2022-04-02 10:40:22').getTime(),
      contributors: [
        {
          name: 'Edie Lemoine',
          email: 'edie@myparcel.nl',
          commits: 59,
        },
        {
          name: 'Joeri van Veen',
          email: 'joeri@myparcel.nl',
          commits: 32,
        },
        {
          name: 'Mark Ernst',
          email: 'mark@myparcel.nl',
          commits: 15,
        },
      ],
    },
    filePathRelative: '',
  })),
  usePageFrontmatter: vi.fn((): DefaultThemeNormalPageFrontmatter => ({})),
}));

describe('pageContributors', () => {
  it('renders properly', () => {
    const wrapper = shallowMount(PageContributors);

    expect(wrapper.element).toMatchInlineSnapshot();
  });
});
