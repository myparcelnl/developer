import {type ComputedRef, computed} from 'vue';
import {describe, expect, it, vi} from 'vitest';
import {type DefaultThemeNormalPageFrontmatter, type DefaultThemePageData} from '@vuepress/theme-default';
import {shallowMount} from '@vue/test-utils';
import PageContributors from '@mptheme/client/views/page/page-contributors/PageContributors.vue';

vi.mock(import('vuepress/client'), async (importOriginal) => ({
  ...(await importOriginal()),
  usePageData: vi.fn(
    (): ComputedRef<DefaultThemePageData> =>
      computed(() => ({
        git: {
          createdTime: new Date('2022-04-02 10:40:22').getTime(),
          updatedTime: new Date('2022-04-02 10:40:22').getTime(),
          contributors: [
            {
              name: 'Edie Lemoine',
              username: 'Edie Lemoine',
              email: 'edie@myparcel.nl',
              commits: 59,
            },
            {
              name: 'Joeri van Veen',
              username: 'Joeri van Veen',
              email: 'joeri@myparcel.nl',
              commits: 32,
            },
            {
              name: 'Mark Ernst',
              username: 'Mark Ernst',
              email: 'mark@myparcel.nl',
              commits: 15,
            },
          ],
        },
        filePathRelative: '',
      })),
  ),
  usePageFrontmatter: vi.fn((): ComputedRef<DefaultThemeNormalPageFrontmatter> => computed(() => ({}))),
}));

describe('pageContributors', () => {
  it('renders properly', () => {
    const wrapper = shallowMount(PageContributors);

    expect(wrapper.element).toMatchInlineSnapshot(`
      <div>
        <span>
           
        </span>
        <span>
          
          
          <span
            title="edie@myparcel.nl"
          >
            Edie Lemoine
          </span>
          
          , 
          
          
          
          <span
            title="joeri@myparcel.nl"
          >
            Joeri van Veen
          </span>
          
          , 
          
          
          
          <span
            title="mark@myparcel.nl"
          >
            Mark Ernst
          </span>
          <!--v-if-->
          
          
        </span>
      </div>
    `);
  });
});
