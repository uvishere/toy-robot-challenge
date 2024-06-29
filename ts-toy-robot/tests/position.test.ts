import { Position } from '../src/lib/position';

describe('Position', () => {
  test('Is valid position', () => {
    const position = new Position(0, 0);
    expect(position.isValid()).toBeTruthy();
  });

  test('Is invalid position', () => {
    const position = new Position(5, 5);
    expect(position.isValid()).toBeFalsy();
  });
});
