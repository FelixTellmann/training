import { nbYear } from './nbYear';

describe('nbYear', function () {
  test('nbYear(1500, 5, 100, 5000) to be 15', () => {
    expect(nbYear(1500, 5, 100, 5000)).toBe(15);
  });
});

