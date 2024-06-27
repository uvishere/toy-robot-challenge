import { Robot } from './utils/Robot';
import { isValidInput } from './utils/Utils';

let placeInputs = [
  'PLACE 0, 2, NORTH',
  'PLACE 1, 3, WEST',
  'MOVE',
  'PLACE 0, 3, WEST',
  'PLACE 5, 5, NORTH',
];

const robot = new Robot();
placeInputs.forEach((placeInput) => {
  let placeSanitizedInput = isValidInput(placeInput);

  if (placeSanitizedInput) {
    const command = placeInput.split(' ')[0];
    console.log('command', command);
    switch (command) {
      case 'PLACE':
        robot.place(placeInput);
        break;
      case 'MOVE':
        robot.move();
        break;
      case 'LEFT':
        break;
      case 'RIGHT':
        break;
      case 'REPORT':
        break;
      default:
    }
  }
});
