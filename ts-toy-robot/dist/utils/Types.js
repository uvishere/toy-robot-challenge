"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DIRECTIONS = exports.Direction = exports.Commands = void 0;
var Commands;
(function (Commands) {
    Commands["MOVE"] = "MOVE";
    Commands["LEFT"] = "LEFT";
    Commands["RIGHT"] = "RIGHT";
    Commands["PLACE"] = "PLACE";
    Commands["REPORT"] = "REPORT";
})(Commands || (exports.Commands = Commands = {}));
var Direction;
(function (Direction) {
    Direction["NORTH"] = "NORTH";
    Direction["SOUTH"] = "SOUTH";
    Direction["EAST"] = "EAST";
    Direction["WEST"] = "WEST";
})(Direction || (exports.Direction = Direction = {}));
exports.DIRECTIONS = Object.values(Direction).filter((key) => typeof key === 'string');
