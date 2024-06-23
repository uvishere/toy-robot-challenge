import { useState } from 'react';
import './App.css';
import Board from './components/Board';
import Form from './components/Form';
import { InitialGameState } from './types';

function App() {
  const [step, setStep] = useState(0);
  const [initialState, setInitialState] = useState<InitialGameState | null>();

  const handleInitialState = (formState: InitialGameState) => {
    setInitialState(formState);
    setStep(1);
  };

  return (
    <div className="game">
      {step === 0 && <Form onSubmit={handleInitialState} />}
      {step === 1 && initialState && (
        <Board
          initialPosition={initialState.position}
          initialDirection={initialState.direction}
        />
      )}
    </div>
  );
}

export default App;
