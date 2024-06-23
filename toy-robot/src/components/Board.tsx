import { BOARD_SIZE, Direction } from '../constants';
import useGame from '../hooks/useGame';
import { Position } from '../types';
import Square from './Square';

interface BoardProps {
  initialPosition: Position;
  initialDirection: Direction;
}

export default function Board({
  initialPosition,
  initialDirection,
}: BoardProps) {
  const { position, direction } = useGame({
    initialPosition: initialPosition,
    initialDirection: initialDirection,
  });

  return (
    <>
      {Array(BOARD_SIZE)
        .fill(0)
        .map((_, row) => (
          <div className="board-row" key={row}>
            {Array(BOARD_SIZE)
              .fill(0)
              .map((_, column) => (
                <Square
                  key={column}
                  direction={direction}
                  boardMatrix={[row, column]}
                  showPerson={row === position[0] && column === position[1]}
                />
              ))}
          </div>
        ))}
    </>
  );
}
