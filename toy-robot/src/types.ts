import { Direction } from './constants';

export type Position = [number, number];

export interface GameState {
  position: Position;
  direction: Direction;
}
