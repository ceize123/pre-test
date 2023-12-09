import { getNumberIntervals } from '../../helpers/utils';

describe('getNumberIntervals', () => {
  it('should return { overlap: [[6, 8],[17, 17]], notInclude: [[0, 4], [12, 13]]}', () => {
    const input = [
      [6, 11],
      [5, 8],
      [17, 20],
      [7, 7],
      [14, 17],
    ];
    const result = getNumberIntervals(input);

    expect(result).toEqual({
      overlap: [
        [6, 8],
        [17, 17],
      ],
      notInclude: [
        [0, 4],
        [12, 13],
      ],
    });
  });

  it('should return { overlap: [[5, 8],[17, 18]], notInclude: [[12, 13]]}', () => {
    const input = [
      [0, 11],
      [5, 8],
      [17, 20],
      [7, 7],
      [14, 18],
    ];
    const result = getNumberIntervals(input);

    expect(result).toEqual({
      overlap: [
        [5, 8],
        [17, 18],
      ],
      notInclude: [[12, 13]],
    });
  });

  it('should return { overlap: [[2, 3],[7, 8], [15, 18]], notInclude: [[0, 0], [11, 13]]}', () => {
    const input = [
      [1, 3],
      [2, 8],
      [15, 20],
      [7, 10],
      [14, 18],
    ];
    const result = getNumberIntervals(input);

    expect(result).toEqual({
      overlap: [
        [2, 3],
        [7, 8],
        [15, 18],
      ],
      notInclude: [
        [0, 0],
        [11, 13],
      ],
    });
  });

  it('should return { overlap: [[7, 10]], notInclude: [[0, 0], [4, 4], [13, 13], [18, 20]]}', () => {
    const input = [
      [1, 3],
      [5, 12],
      [7, 10],
      [14, 17],
    ];
    const result = getNumberIntervals(input);

    expect(result).toEqual({
      overlap: [[7, 10]],
      notInclude: [
        [0, 0],
        [4, 4],
        [13, 13],
        [18, 20],
      ],
    });
  });
});
