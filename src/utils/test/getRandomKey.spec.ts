import { mockRandom, resetMockRandom } from 'jest-mock-random';

// @home-book
import { CHARACTERS } from 'home-book-constants';

// utils
import { getRandomKey } from '../getRandomKey';

describe('getRandomKey', () => {
  afterEach(() => {
    resetMockRandom();
  });

  it('Should return unique keys', () => {
    // mock
    mockRandom([
      ...Array.from(Array(9), () => 0),
      ...Array.from(Array(9), () => 0.5),
    ]);

    // before
    const keys: Array<string> = [];

    // action
    keys.push(getRandomKey(keys));
    keys.push(getRandomKey(keys));

    // result
    expect(keys[0]).not.toBe(keys[1]);
  });

  it('Should repeat action when keys are the same', () => {
    // mock
    mockRandom([
      ...Array.from(Array(9 * 2), () => 0),
      ...Array.from(Array(9), () => 0.5),
    ]);

    // before
    const keys: Array<string> = [];

    // action
    keys.push(getRandomKey());
    keys.push(getRandomKey(keys));

    // result
    expect(keys[0]).not.toBe(keys[1]);
  });

  it('Should return unique keys when the keys are not passed', () => {
    // mock
    mockRandom([
      ...Array.from(Array(9), () => 0),
      ...Array.from(Array(9), () => 0.5),
    ]);

    // before
    const keys: Array<string> = [];

    // action
    keys.push(getRandomKey());

    // result
    expect(keys).toStrictEqual([
      Array.from(Array(9), () => CHARACTERS[0]).join(''),
    ]);
  });
});
