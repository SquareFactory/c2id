import { randomBytes, randomInt } from 'crypto';
import c2id from './c2id';

describe('c2id', () => {
  it('should match 16-characters identifiers', () => {
    expect(c2id()).toMatch(/[a-zA-Z0-9]{16}/);
    expect(c2id(16)).toMatch(/[a-zA-Z0-9]{16}/);
    expect(c2id('foo')).toMatch(/[a-zA-Z0-9]{16}/);
    expect(c2id(16, 'bar')).toMatch(/[a-zA-Z0-9]{16}/);
  });

  it('should generate flexible length identifiers', () => {
    const sizes = Array(5).map(() => randomInt(1, 20));

    sizes.forEach((size) => {
      expect(c2id(size).length).toBe(size);
    });
  });

  it('should generate stable identifiers for a given seed', () => {
    const seed = randomBytes(16);
    const checks = 100;
    const expected = c2id(seed);

    for (let i = 0; i < checks; i++) {
      expect(c2id(seed)).toBe(expected);
    }
  });
});
