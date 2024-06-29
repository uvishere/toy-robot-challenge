import { Command } from '../src/lib/command';
import { Robot } from '../src/lib/robot';
import { StatusMessages } from '../src/lib/types';

console.log = jest.fn();

describe('Command:', () => {
  describe('invalid', () => {
    test('Should return invalid command', () => {
      const robot = new Robot();
      Command.run(robot, 'INVALID');
      expect(console.log).toHaveBeenCalledWith(StatusMessages.INVALID_COMMAND);
    });

    test('Should return invalid place command', () => {
      const robot = new Robot();
      Command.run(robot, 'PLACE a 2 NORTH');
      expect(console.log).toHaveBeenCalledWith(StatusMessages.INVALID_COMMAND);
    });
  });

  describe('place', () => {
    test('Should place the robot', () => {
      const robot = new Robot();
      Command.run(robot, 'PLACE 0,0, NORTH');
      expect(robot.report().data).toStrictEqual({
        position: [0, 0],
        direction: 'NORTH',
      });
    });
  });

  describe('move', () => {
    test('should move the robot', () => {
      const robot = new Robot();
      Command.run(robot, 'PLACE 0,0, NORTH');
      Command.run(robot, 'MOVE');
      expect(robot.report().data).toStrictEqual({
        position: [0, 1],
        direction: 'NORTH',
      });
    });

    describe('grid', () => {
      test('not placed trying to move at first', () => {
        const robot = new Robot();
        Command.run(robot, 'MOVE');
        expect(console.log).toHaveBeenCalledWith(StatusMessages.NOT_PLACED);
      });
    });

    test('edge reached when trying to report at first', () => {
      const robot = new Robot();
      Command.run(robot, 'REPORT');
      expect(console.log).toHaveBeenCalledWith(StatusMessages.NOT_PLACED);
    });

    test('edge reached when trying to move away from edge', () => {
      const robot = new Robot();
      Command.run(robot, 'PLACE 4,4, NORTH');
      Command.run(robot, 'MOVE');
      expect(console.log).toHaveBeenCalledWith(StatusMessages.EDGE_REACHED);
    });
  });
});
