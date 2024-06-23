export const PERSON = '🚶';
export const BOARD_SIZE = 5;
export enum Direction {
  'NORTH' = 'NORTH',
  'SOUTH' = 'SOUTH',
  'EAST' = 'EAST',
  'WEST' = 'WEST',
}
export const DIRECTIONS = Object.values(Direction).filter(
  (key) => typeof key === 'string'
);
