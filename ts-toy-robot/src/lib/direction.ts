import { DIRECTION_RING, Directions } from './types';

export class Direction {
  public currentDirection: Directions;

  constructor(direction: Directions) {
    this.currentDirection = direction;
  }

  goLeft() {
    const currentDirectionIndex = this.getCurrentDirectionIndex();
    this.currentDirection = this.getDirectionByIndex(currentDirectionIndex - 1);
  }

  goRight() {
    const currentDirectionIndex = this.getCurrentDirectionIndex();
    this.currentDirection = this.getDirectionByIndex(currentDirectionIndex + 1);
  }

  private getCurrentDirectionIndex() {
    return DIRECTION_RING.indexOf(this.currentDirection);
  }
  private getDirectionByIndex(index: number) {
    return DIRECTION_RING[
      (index + DIRECTION_RING.length) % DIRECTION_RING.length
    ];
  }
}
