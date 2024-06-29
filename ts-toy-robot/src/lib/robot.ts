import { BOARD_SIZE, DIRECTION_RING, Direction } from './types';

export class Robot {
  private positionX!: number;
  private positionY!: number;
  private direction!: Direction;

  /**
   *
   * @param position set position of the robot:
   */
  private setPosition(position: number[]) {
    this.positionX = position[0];
    this.positionY = position[1];
    console.log('new position', this.positionX, this.positionY);
  }

  /**
   *
   * @param direction set direction of the robot
   */
  private setDirection(direction: Direction) {
    this.direction = direction;
    console.log('New direction', this.direction);
  }

  /**
   * move: move the robot in the grid
   */
  public move() {
    switch (this.direction) {
      case Direction.NORTH:
        if (this.positionY < BOARD_SIZE - 1) {
          this.setPosition([this.positionX, ++this.positionY]);
        } else {
          console.log('Robot has reached the edge of the grid');
        }
        break;

      case Direction.SOUTH:
        if (this.positionY > 0) {
          this.setPosition([this.positionX, --this.positionY]);
        } else {
          console.log('Robot has reached the edge of the grid');
        }
        break;

      case Direction.EAST:
        // Use BOARD size
        if (this.positionX < BOARD_SIZE - 1) {
          this.setPosition([++this.positionX, this.positionY]);
        } else {
          console.log('Robot has reached the edge of the grid');
        }
        break;

      case Direction.WEST:
        if (this.positionX > 0) {
          this.setPosition([--this.positionX, this.positionY]);
        } else {
          console.log('Robot has reached the edge of the grid');
        }
        break;

      default:
        break;
    }
    console.log('new position', this.positionX, this.positionY, this.direction);
  }

  /**
   * place: place the robot in the grid
   * @param input: string
   */
  public place(input: [number, number, Direction]) {
    const [x, y, direction] = input;

    if (!this.inRange(x, y, BOARD_SIZE)) {
      console.log('Robot placed at', x, y, direction, 'and can not move');
      return;
    }

    this.setPosition([x, y]);
    this.setDirection(direction);
  }

  /**
   * report: output the current position of the robot
   * @returns void
   */
  public report() {
    console.log(
      'Output:%s,%s,%s',
      this.positionX,
      this.positionY,
      this.direction
    );
  }

  /**
   * left: turn the robot to the left
   */
  public left() {
    const currentIndex = DIRECTION_RING.indexOf(this.direction);
    let nextIndex = currentIndex - 1;
    if (nextIndex < 0) {
      nextIndex = DIRECTION_RING.length - 1;
    }

    this.setDirection(DIRECTION_RING[nextIndex]);
  }
  /**
   * right: turn the robot to the right
   */
  public right() {
    const currentIndex = DIRECTION_RING.indexOf(this.direction);
    let nextIndex = (currentIndex + 1) % DIRECTION_RING.length;
    this.setDirection(DIRECTION_RING[nextIndex]);
  }

  /**
   *
   * @param x position in x direction
   * @param y position in y direction
   * @param BOARD_SIZE size of the board
   * @returns boolean
   */
  private inRange(x: number, y: number, BOARD_SIZE: number): boolean {
    const min = 0;
    const max = BOARD_SIZE - 1;

    if ((min - x) * (max - x) > max) {
      return false;
    } else if ((min - y) * (max - y) > max) {
      return false;
    } else return true;
  }
}
