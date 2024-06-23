import { FormEvent } from 'react';
import { BOARD_SIZE, Direction, DIRECTIONS } from '../constants';
import { InitialGameState } from '../types';

interface FormProps {
  onSubmit: (gameState: InitialGameState) => void;
}

export default function Form({ onSubmit }: FormProps) {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const isFormValid = form.checkValidity();
    if (!isFormValid) return;

    let formData = new FormData(form);

    onSubmit({
      position: [Number(formData.get('row')), Number(formData.get('column'))],
      direction: formData.get('direction') as unknown as Direction,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="row">Row: </label>
      <input
        name="row"
        type="number"
        required={true}
        min={0}
        max={BOARD_SIZE - 1}
      />

      <label htmlFor="column">Column: </label>
      <input
        name="column"
        type="number"
        required={true}
        min={0}
        max={BOARD_SIZE - 1}
      />

      <label htmlFor="direction">
        Direction:
        <select name="direction" required={true}>
          {DIRECTIONS.map((direction) => (
            <option key={direction} value={direction}>
              {direction}
            </option>
          ))}
        </select>
      </label>

      <button type="submit">PLACE</button>
    </form>
  );
}
