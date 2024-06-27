"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Robot = void 0;
const Types_1 = require("./Types");
class Robot {
    setPosition(position) {
        this.positionX = position[0];
        this.positionY = position[1];
        console.log('new position', this.positionX, this.positionY);
    }
    setDirection(direction) {
        this.direction = direction;
        console.log('New direction', this.direction);
    }
    move() {
        console.log('CURRENT DIRECTION:', this.direction === Types_1.Direction.WEST);
        switch (this.direction) {
            case Types_1.Direction.NORTH:
                if (this.positionY < 4) {
                    this.setPosition([this.positionX, this.positionY + 1]);
                }
                else {
                    console.log('Robot has reached the edge of the grid');
                }
                break;
            case Types_1.Direction.SOUTH:
                if (this.positionY > 0) {
                    this.setPosition([this.positionX, this.positionY - 1]);
                }
                else {
                    console.log('Robot has reached the edge of the grid');
                }
                break;
            case Types_1.Direction.EAST:
                if (this.positionX < 4) {
                    this.setPosition([this.positionX + 1, this.positionY]);
                }
                else {
                    console.log('Robot has reached the edge of the grid');
                }
                break;
            case Types_1.Direction.WEST:
                if (this.positionX > 0) {
                    this.setPosition([this.positionX - 1, this.positionY]);
                }
                else {
                    console.log('Robot has reached the edge of the grid');
                }
                break;
            default:
                break;
        }
        console.log('new position', this.positionX, this.positionY, this.direction);
    }
    /**
     * place: place the robot in the grid
     * @param input: string
     */
    place(input) {
        const sanitizedInput = input
            .replace('PLACE ', '')
            .split(',')
            .map((part) => part.trim());
        const [x, y, direction] = sanitizedInput;
        if (x >= 0 && x < 5 && y >= 0 && y < 5) {
            console.log('Robot placed at', x, y, direction, 'and can not move');
            return;
        }
        this.setPosition([x, y]);
        this.setDirection(direction);
    }
}
exports.Robot = Robot;
