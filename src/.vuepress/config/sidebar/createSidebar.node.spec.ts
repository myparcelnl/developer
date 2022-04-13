import { createSidebar } from './createSidebar';
// @ts-ignore
import mockFs from 'mock-fs';

describe('auto sidebar', () => {
  beforeEach(() => {
    mockFs({
      'path/to/basedir': {
        folder1: {
          folder1_1: {
            folder1_1_2: {
              'index.md': 'Vuepress content file',
            },
            '01.md': 'one',
            '02.md': 'two',
          },
          folder1_2: {
            'index.md': 'Vuepress content file',
          },
          'index.md': 'Vuepress content file',
        },
        folder2: {

        },
        folder3: {

        },
      },
    });
  });

  afterEach(() => {
    mockFs.restore();
  });

  it('works', () => {
    const sidebar = createSidebar('path/to/basedir');

    expect(sidebar)
      .toStrictEqual({});
  });
});
