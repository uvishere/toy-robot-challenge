import { Robot } from '../src/lib/robot';
import { Directions, Status, StatusMessages } from '../src/lib/types';

describe('Robot', () => {
  describe('place', () => {
    test('should place robot', () => {
      const robot = new Robot();
      robot.place([0, 0, Directions.NORTH]);
      expect(robot.place([0, 0, Directions.NORTH]).status).toEqual(
        Status.SUCCESS
      );
    });

    test('should not place robot outside the grid', () => {
      const robot = new Robot();
      robot.place([4, 4, Directions.NORTH]);

      expect(robot.place([5, 5, Directions.NORTH]).message).toEqual(
        StatusMessages.EDGE_REACHED
      );
    });
  });

  describe('move', () => {
    test('should return new position after move', () => {
      const robot = new Robot();
      robot.place([0, 0, Directions.NORTH]);
      robot.move();
      expect(robot.report().data).toStrictEqual({
        position: [0, 1],
        direction: Directions.NORTH,
      });
    });

    test('should return same position after moving to the edge of the grid', () => {
      const robot = new Robot();
      robot.place([4, 4, Directions.NORTH]);
      robot.move();
      expect(robot.report().data).toStrictEqual({
        position: [4, 4],
        direction: Directions.NORTH,
      });
    });

    test('should return message the edge of the grid', () => {
      const robot = new Robot();
      robot.place([4, 4, Directions.NORTH]);
      expect(robot.move().message).toStrictEqual(StatusMessages.EDGE_REACHED);
    });
  });

  describe('directions', () => {
    test('should return new direction to LEFT', () => {
      const robot = new Robot();
      robot.place([0, 0, Directions.NORTH]);
      robot.left();
      expect(robot.report().data?.direction).toStrictEqual(Directions.WEST);
    });

    test('should return new direction to RIGHT', () => {
      const robot = new Robot();
      robot.place([0, 0, Directions.NORTH]);
      robot.right();
      expect(robot.report().data?.direction).toStrictEqual(Directions.EAST);
    });
  });
});
