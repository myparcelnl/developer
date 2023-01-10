import {MyPaNavbarConfigArray} from '@mptheme/config.types';
import {findNavItem} from '@mptheme/client/utils/find-nav-item/findNavItem';

const array: MyPaNavbarConfigArray = [
  {
    text: 'api-reference',
    children: [
      {
        text: 'shipments',
        children: [{text: 'create', link: '/'}],
      },
      {
        text: 'webhooks',
        children: [{text: 'create', link: '/'}],
      },
    ],
  },
  {
    text: 'documentation',
    children: [
      {
        text: 'sdk',
        children: [
          {text: 'installation', link: '/'},
          {text: 'getting-started', link: '/'},
        ],
      },
    ],
  },
];

describe('findRecursive', () => {
  it('finds', () => {
    expect(findNavItem(array, ['documentation', 'sdk'])).toStrictEqual({
      text: 'sdk',
      children: [
        {text: 'installation', link: '/'},
        {text: 'getting-started', link: '/'},
      ],
    });
  });
});
