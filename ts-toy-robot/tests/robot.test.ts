import { Robot } from '../src/lib/robot';
import { Direction } from '../src/lib/types';

const robot = new Robot();
robot.place([0, 0, Direction.NORTH]);

describe('Testing robot class', () => {
  test('should return new position', () => {
    robot.place([0, 0, Direction.NORTH]);
    robot.move();
    expect(robot.report()).toEqual([0, 1, Direction.NORTH]);
  });

  test('should return new direction to LEFT', () => {
    robot.place([0, 0, Direction.NORTH]);
    robot.left();
    expect(robot.report()).toEqual([0, 0, Direction.WEST]);
  });

  test('should return new direction to RIGHT', () => {
    robot.place([0, 0, Direction.NORTH]);
    robot.right();
    expect(robot.report()).toEqual([0, 0, Direction.EAST]);
  });

  test('should return new position after moving to the edge of the grid', () => {
    robot.place([4, 4, Direction.NORTH]);
    robot.move();
    expect(robot.report()).toEqual([4, 4, Direction.NORTH]);
  });

  test('should return new position after moving and changing directions multiple times', () => {
    robot.place([1, 2, Direction.EAST]);
    robot.move();
    robot.move();
    robot.left();
    robot.move();
    expect(robot.report()).toEqual([3, 3, Direction.NORTH]);
  });
});
