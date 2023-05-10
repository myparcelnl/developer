import { describe } from 'vitest';
import { dot } from './dot';

describe('dot', () => {
  it('converts a path to dot notation', () => {
    expect(dot({
      test: {
        one: 1,
        two: [
          2,
          3,
        ],
        three: [
          {
            four: 'five',
          },
        ],
      },
    })).toEqual({
      'test.one': 1,
      'test.two.0': 2,
      'test.two.1': 3,
      'test.three.0.four': 'five',
    });
  });
});
