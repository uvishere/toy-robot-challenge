import { Robot } from './robot';
import { Commands, Direction } from './types';

export class Command {
  static run(robot: Robot, input: string) {
    const command = input.split(' ')[0];

    switch (command) {
      case Commands.PLACE:
        Command.place(robot, input);
        break;
      case Commands.MOVE:
        Command.move(robot);
        break;
      case Commands.LEFT:
        Command.left(robot);
        break;
      case Commands.RIGHT:
        Command.right(robot);
        break;
      case Commands.REPORT:
        Command.report(robot);
        break;
      default:
        console.log('\x1b[35m', 'NOT VALID COMMAND', '\x1b[0m');
        break;
    }
  }

  private static place(robot: Robot, input: string) {
    // Use a regular expression to match and capture the parts of the input
    const match = input.match(
      /^(PLACE)\s*(\d)\s*,\s*(\d)\s*,\s*(NORTH|SOUTH|EAST|WEST)$/
    );
    if (!match) {
      console.log('\x1b[35m', 'INVALID PLACE COMMAND', '\x1b[0m');
      return;
    }

    const [_, command, x, y, direction] = match as [
      string,
      Commands,
      number,
      number,
      Direction
    ];

    robot.place([x, y, direction]);
    return [command, x, y, direction];
  }

  private static move(robot: Robot) {
    return robot.move();
  }

  private static left(robot: Robot) {
    return robot.left();
  }

  private static right(robot: Robot) {
    return robot.right();
  }

  private static report(robot: Robot) {
    return robot.report();
  }
}
