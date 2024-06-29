import { Direction } from '../src/lib/direction';
import { Directions } from '../src/lib/types';

describe('Direction', () => {
  test('toLeft', () => {
    const direction = new Direction(Directions.NORTH);
    direction.goLeft();
    expect(direction.currentDirection).toBe(Directions.WEST);
  });

  test('toRight', () => {
    const direction = new Direction(Directions.EAST);
    direction.goRight();
    expect(direction.currentDirection).toBe(Directions.SOUTH);
  });
});
