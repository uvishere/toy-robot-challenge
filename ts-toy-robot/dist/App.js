"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Robot_1 = require("./utils/Robot");
const Utils_1 = require("./utils/Utils");
let placeInputs = [
    'PLACE 0, 2, NORTH',
    'PLACE 1, 3, WEST',
    'MOVE',
    'PLACE 0, 3, WEST',
    'PLACE 5, 5, NORTH',
];
const robot = new Robot_1.Robot();
placeInputs.forEach((placeInput) => {
    let placeSanitizedInput = (0, Utils_1.isValidInput)(placeInput);
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
