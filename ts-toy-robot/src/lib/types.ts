export const BOARD_SIZE = 5;

export enum Commands {
  MOVE = 'MOVE',
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
  PLACE = 'PLACE',
  REPORT = 'REPORT',
}
export enum Direction {
  NORTH = 'NORTH',
  SOUTH = 'SOUTH',
  EAST = 'EAST',
  WEST = 'WEST',
}

export const DIRECTION_RING = [
  Direction.EAST,
  Direction.SOUTH,
  Direction.WEST,
  Direction.NORTH,
];
