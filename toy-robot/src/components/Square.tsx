import { Direction, PERSON } from '../constants';

interface SquareProps {
  boardMatrix: number[];
  direction: Direction;
  showPerson: boolean;
}

export default function Square({
  boardMatrix,
  direction,
  showPerson,
}: SquareProps) {
  return (
    <div className={`square`}>
      <span>{boardMatrix.toString()}</span>
      <span className={`${direction} person`}>{showPerson && PERSON}</span>
    </div>
  );
}
