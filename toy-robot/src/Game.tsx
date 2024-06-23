import { useEffect, useState } from 'react';

const person = '🚶';
const BOARD_SIZE = 5;
const Direction = {
  NORTH: 'NORTH',
  SOUTH: 'SOUTH',
  EAST: 'EAST',
  WEST: 'WEST',
};

interface SquareProps {
  boardMatrix: number[];
  direction: string;
  showPerson: boolean;
}

interface BoardProps {
  direction: string;
  position: number[];
}

function Square({ boardMatrix, direction, showPerson }: SquareProps) {
  return (
    <div className={`square`}>
      <span>{boardMatrix.toString()}</span>
      <span className={`${direction} person`}>{showPerson && person}</span>
    </div>
  );
}

function Board({ direction, position }: BoardProps) {
  return (
    <>
      {Array(5)
        .fill(0)
        .map((_, row) => (
          <div className="board-row" key={row}>
            {Array(5)
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

export default function Game() {
  const [position, setPosition] = useState([0, 0]);
  const [direction, setDirection] = useState(Direction.WEST);

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      switch (event.code) {
        case 'ArrowRight':
          setDirection(Direction.EAST);
          setPosition((position) => {
            if (position[1] === BOARD_SIZE - 1) return position;
            return [position[0], position[1] + 1];
          });

          break;
        case 'ArrowLeft':
          setDirection(Direction.WEST);
          setPosition((position) => {
            if (position[1] === 0) return position;
            return [position[0], position[1] - 1];
          });
          break;
        case 'ArrowUp':
          setDirection(Direction.NORTH);
          setPosition((position) => {
            if (position[0] === 0) return position;
            return [position[0] - 1, position[1]];
          });
          break;
        case 'ArrowDown':
          setDirection(Direction.SOUTH);
          setPosition((position) => {
            if (position[0] === BOARD_SIZE - 1) return position;
            return [position[0] + 1, position[1]];
          });
          break;
        default:
      }
    };

    window.addEventListener('keydown', handler, false);

    return () => window.removeEventListener('keydown', handler, false);
  }, [setDirection]);

  return (
    <>
      <Board direction={direction} position={position} />
      <div>
        <span>
          Current Position: {position[0]},{position[1]},{direction}
        </span>
      </div>
    </>
  );
}
