import { useState } from 'react';
import './App.css';
import Board from './components/Board';
import Form from './components/Form';
import { GameState } from './types';

function App() {
  const [step, setStep] = useState(0);
  const [initialState, setInitialState] = useState<GameState | null>();

  const handleInitialState = (formState: GameState) => {
    setInitialState(formState);
    setStep(1);
  };

  return (
    <div className="game">
      <h2>Toy robot (human) simulator</h2>
      {step === 0 && (
        <>
          <span className="status">
            Where do you want to place your robot first?
          </span>
          <Form onSubmit={handleInitialState} />
        </>
      )}
      {step === 1 && initialState && (
        <>
          <span>
            To move the robot, simply use the arrow keys on your keyboard.
          </span>

          <Board
            initialPosition={initialState.position}
            initialDirection={initialState.direction}
          />
        </>
      )}
    </div>
  );
}

export default App;
