import { Robot } from './robot';
import { Commands, Directions, StatusMessages } from './types';

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
        console.log(StatusMessages.INVALID_COMMAND);
        break;
    }
  }

  private static place(robot: Robot, input: string) {
    // Use a regular expression to match and capture the parts of the input
    const match = input.match(
      /^(PLACE)\s*(\d)\s*,\s*(\d)\s*,\s*(NORTH|SOUTH|EAST|WEST)$/
    );
    if (!match) {
      console.log(StatusMessages.INVALID_COMMAND);
      return;
    }

    const [_, command, x, y, direction] = match as [
      string,
      Commands,
      string,
      string,
      Directions
    ];

    robot.place([parseInt(x), parseInt(y), direction]);
  }

  private static move(robot: Robot) {
    const resp = robot.move();
    resp?.status === 'error' && console.log(resp.message);
  }

  private static left(robot: Robot) {
    return robot.left();
  }

  private static right(robot: Robot) {
    return robot.right();
  }

  private static report(robot: Robot) {
    const res = robot.report();
    if (res.data) {
      console.log('Output:', res.data.position, res.data.direction);
    } else {
      console.log(res.message);
    }
  }
}
