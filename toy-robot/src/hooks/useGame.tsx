import { useEffect, useState } from 'react';
import { BOARD_SIZE, Direction } from '../constants';

interface useGameProps {
  initialPosition: number[];
  initialDirection: Direction;
}

export default function useGame({
  initialPosition,
  initialDirection,
}: useGameProps) {
  const [position, setPosition] = useState(initialPosition);
  const [direction, setDirection] = useState(initialDirection);

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
            if (position[0] === BOARD_SIZE - 1) return position;
            return [position[0] + 1, position[1]];
          });
          break;

        case 'ArrowDown':
          setDirection(Direction.SOUTH);
          setPosition((position) => {
            if (position[0] === 0) return position;
            return [position[0] - 1, position[1]];
          });
          break;
        default:
      }
    };

    window.addEventListener('keydown', handler, false);

    return () => window.removeEventListener('keydown', handler, false);
  }, [position, direction, setPosition, setDirection]);

  return {
    position,
    direction,
  };
}
