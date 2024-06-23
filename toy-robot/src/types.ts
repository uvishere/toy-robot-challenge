import { Direction } from './constants';

export type Position = [number, number];

export interface InitialGameState {
  position: Position;
  direction: Direction;
}
