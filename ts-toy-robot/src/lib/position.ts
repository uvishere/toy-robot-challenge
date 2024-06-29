import { BOARD_SIZE } from './types';

export class Position {
  static BOARD_SIZE = BOARD_SIZE;
  public x: number;
  public y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  isValid() {
    return (
      this.x >= 0 &&
      this.x < Position.BOARD_SIZE &&
      this.y >= 0 &&
      this.y < Position.BOARD_SIZE
    );
  }
}
