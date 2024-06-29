export const BOARD_SIZE = 5;

export enum Commands {
  MOVE = 'MOVE',
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
  PLACE = 'PLACE',
  REPORT = 'REPORT',
}

export enum Directions {
  NORTH = 'NORTH',
  SOUTH = 'SOUTH',
  EAST = 'EAST',
  WEST = 'WEST',
}

export const DIRECTION_RING = [
  Directions.EAST,
  Directions.SOUTH,
  Directions.WEST,
  Directions.NORTH,
];

export enum StatusMessages {
  INVALID_COMMAND = 'INVALID COMMAND',
  SUCCESS = 'Robot is placed successfully',
  EDGE_REACHED = 'Robot has reached the edge of the grid',
  NOT_PLACED = 'Robot is not placed yet',
}

export enum Status {
  SUCCESS = 'success',
  ERROR = 'error',
}

export type Output = {
  status: Status;
  message: string;
  data?: {
    position: [number, number];
    direction: Directions;
  };
};
