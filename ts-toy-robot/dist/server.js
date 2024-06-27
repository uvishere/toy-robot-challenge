"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Robot = void 0;
var Direction;
(function (Direction) {
    Direction["EAST"] = "EAST";
    Direction["WEST"] = "WEST";
    Direction["NORTH"] = "NORTH";
    Direction["SOUTH"] = "SOUTH";
})(Direction || (Direction = {}));
var Commands;
(function (Commands) {
    Commands["MOVE"] = "MOVE";
    Commands["LEFT"] = "LEFT";
    Commands["RIGHT"] = "RIGHT";
    Commands["PLACE"] = "PLACE";
    Commands["REPORT"] = "REPORT";
})(Commands || (Commands = {}));
class Robot {
    constructor() {
        this.positionX = null;
        this.positionY = null;
        this.direction = null;
    }
    setPosition(position) {
        this.positionX = position[0];
        this.positionY = position[1];
        console.log('new position', this.positionX, this.positionY);
    }
    setDirection(direction) {
        this.direction = direction;
        console.log('New direction', this.direction);
    }
}
exports.Robot = Robot;
const robot = new Robot();
robot.setPosition([2, 2]);
robot.setDirection(Direction.NORTH);
let input = 'PLACE 2, 2, NORTH';
function sanitizeInput(input) {
    const validCommands = new RegExp('PLACE d,s*d,s*(NORTH|SOUTH|EAST|WEST)');
    console.log(validCommands.test(input));
    if (validCommands.test(input) === false) {
        console.log('Invalid command', input);
    }
    switch (input) {
        case Commands.MOVE:
            console.log('Move');
            break;
        case Commands.LEFT:
            console.log('Left');
            break;
        case Commands.RIGHT:
            console.log('Right');
            break;
        case Commands.PLACE:
            console.log('Place');
            break;
        case Commands.REPORT:
            console.log('Report');
            break;
        default:
            break;
    }
}
sanitizeInput(input);
