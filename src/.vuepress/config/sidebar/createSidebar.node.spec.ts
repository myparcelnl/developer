import { createSidebar } from './createSidebar';
import mockFs from 'mock-fs';

describe('auto sidebar', () => {
  beforeEach(() => {
    mockFs({
      src: {
        folder1: {
          folder1_1: {
            folder1_1_2: {
              'readme.md': 'Vuepress content file',
            },
            '01.md': 'one',
            '02.md': 'two',
          },
          folder1_2: {
            'readme.md': 'Vuepress content file',
          },
          'readme.md': 'Vuepress content file',
        },
        folder2: {},
        folder3: {},
      },

      // Mock node_modules paths necessary for the test
      'node_modules/vuepress-bar': mockFs.load('node_modules/vuepress-bar'),
      'node_modules/uc.micro': mockFs.load('node_modules/uc.micro'),
    });
  });

  afterEach(() => {
    mockFs.restore();
  });

  it('works', () => {
    const sidebar = createSidebar();

    expect(sidebar).toMatchInlineSnapshot(`
      {
        "/folder1": [
          {
            "children": [
              {
                "children": [
                  "/folder1/folder1_1/01",
                  "/folder1/folder1_1/02",
                  {
                    "children": [
                      "/folder1/folder1_1/folder1_1_2/",
                    ],
                    "text": "Folder1 1 2",
                  },
                ],
                "collapsible": true,
                "text": "Folder1 1",
              },
              {
                "children": [
                  "/folder1/folder1_2/",
                ],
                "collapsible": true,
                "text": "Folder1 2",
              },
            ],
            "link": undefined,
            "text": "folder1",
          },
        ],
        "/folder2": [
          {
            "children": [],
            "link": undefined,
            "text": "folder2",
          },
        ],
        "/folder3": [
          {
            "children": [],
            "link": undefined,
            "text": "folder3",
          },
        ],
      }
    `);
  });

  // it('renders correct base level items', () => {
  //   expect(Object.keys(sidebar)).toEqual([...SIDEBAR_ITEMS, '/nl']);
  // });
  //
  // it('gives each top level item its own link', () => {
  //   expect.assertions(SIDEBAR_ITEMS.length);
  //   SIDEBAR_ITEMS.forEach((item) => {
  //     expect(sidebar?.[item][0].link).toEqual(item);
  //   });
  // });
});
