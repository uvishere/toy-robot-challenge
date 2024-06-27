import { Direction } from './Types';

export class Robot {
  private positionX!: number;
  private positionY!: number;
  private direction!: Direction;

  private setPosition(position: number[]) {
    this.positionX = position[0];
    this.positionY = position[1];
    console.log('new position', this.positionX, this.positionY);
  }

  private setDirection(direction: Direction) {
    this.direction = direction;
    console.log('New direction', this.direction);
  }

  public move() {
    console.log('CURRENT DIRECTION:', this.direction === Direction.WEST);

    switch (this.direction) {
      case Direction.NORTH:
        if (this.positionY < 4) {
          this.setPosition([this.positionX, this.positionY + 1]);
        } else {
          console.log('Robot has reached the edge of the grid');
        }
        break;

      case Direction.SOUTH:
        if (this.positionY > 0) {
          this.setPosition([this.positionX, this.positionY - 1]);
        } else {
          console.log('Robot has reached the edge of the grid');
        }
        break;

      case Direction.EAST:
        if (this.positionX < 4) {
          this.setPosition([this.positionX + 1, this.positionY]);
        } else {
          console.log('Robot has reached the edge of the grid');
        }
        break;

      case Direction.WEST:
        if (this.positionX > 0) {
          this.setPosition([this.positionX - 1, this.positionY]);
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
  public place(input: string) {
    const sanitizedInput = input
      .replace('PLACE ', '')
      .split(',')
      .map((part) => part.trim()) as [number, number, Direction];

    const [x, y, direction] = sanitizedInput;

    if (x >= 0 && x < 5 && y >= 0 && y < 5) {
      console.log('Robot placed at', x, y, direction, 'and can not move');
      return;
    }

    this.setPosition([x, y]);
    this.setDirection(direction);
  }
}
