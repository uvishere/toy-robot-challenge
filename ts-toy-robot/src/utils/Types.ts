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
export const DIRECTIONS = Object.values(Direction).filter(
  (key) => typeof key === 'string'
);
