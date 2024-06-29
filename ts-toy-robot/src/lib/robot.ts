import { Direction } from './direction';
import { Position } from './position';
import { Directions, Output, Status, StatusMessages } from './types';

export class Robot {
  private position!: Position;
  private direction!: Direction;

  /**
   * move: move the robot in the grid
   */
  public move() {
    if (!this.position || !this.direction) {
      return this.response(Status.ERROR, StatusMessages.NOT_PLACED);
    }
    let newPosition: Position;
    switch (this.direction.currentDirection) {
      case Directions.NORTH:
        newPosition = new Position(this.position.x, this.position.y + 1);
        break;

      case Directions.EAST:
        newPosition = new Position(this.position.x + 1, this.position.y);
        break;

      case Directions.SOUTH:
        newPosition = new Position(this.position.x, this.position.y - 1);
        break;

      case Directions.WEST:
        newPosition = new Position(this.position.x - 1, this.position.y);
        break;

      default:
        throw new Error('Invalid direction');
    }

    if (newPosition.isValid()) {
      this.position = newPosition;
      return this.response(Status.SUCCESS, StatusMessages.SUCCESS);
    }

    return this.response(Status.ERROR, StatusMessages.EDGE_REACHED);
  }

  /**
   * place: place the robot in the grid
   * @param input: string
   */
  public place([x, y, direction]: [number, number, Directions]) {
    const position = new Position(x, y);
    if (!position || !direction) {
      return this.response(Status.ERROR, StatusMessages.NOT_PLACED);
    }
    if (!position.isValid()) {
      return this.response(Status.ERROR, StatusMessages.EDGE_REACHED);
    }
    this.position = position;
    this.direction = new Direction(direction);
    return this.response(Status.SUCCESS, StatusMessages.SUCCESS);
  }

  /**
   * report: output the current position of the robot
   * @returns Output
   */
  public report() {
    if (!this.position || !this.direction) {
      return this.response(Status.ERROR, StatusMessages.NOT_PLACED);
    }
    return this.response(Status.SUCCESS, StatusMessages.SUCCESS, {
      position: [this.position.x, this.position.y],
      direction: this.direction.currentDirection,
    });
  }

  /**
   * left: turn the robot to the left
   */
  public left() {
    this.direction.goLeft();
    return this.response(Status.SUCCESS, StatusMessages.SUCCESS);
  }
  /**
   * right: turn the robot to the right
   */
  public right() {
    this.direction.goRight();
    return this.response(Status.SUCCESS, StatusMessages.SUCCESS);
  }

  /**
   *
   * @param status status of the operation
   * @param message message of the operation
   * @param data data to be returned
   * @returns Output
   */
  private response(
    status: Status,
    message: StatusMessages,
    data?: { position: [number, number]; direction: Directions }
  ) {
    if (data) {
      return {
        status,
        message,
        data,
      } as Output;
    }
    return {
      status,
      message,
    } as Output;
  }
}
