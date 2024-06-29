# Toy Robot Challenge

CLI Version: 1.0.0

## Overview

This is the toy-robot-simulator in cli version. Written in typescript, this simulator is inspired by the popular [toy-robot-test](https://joneaves.wordpress.com/2014/07/21/toy-robot-coding-test/).

## Installation

- Clone this repo
- `cd ts-toy-robot`
- `npm i`
- `npm run dev`

## Usage

The simulator can be used using the command interface in your terminal.
The board size is grid of 5x5
Use the available command to place the Robot at first on the board and move around.
The current position can be return using `REPORT` command.
The robot doesn't fall of the board by restricting the movement within the board's grid.

## Test

Unit tests can be found inside `tests/*`. To run the tests:

- `npm run test`

### Available commands

- **PLACE** x, y, DIRECTION : place the robot on the
- **MOVE** : move robot on the board
- **LEFT** : turn robot by 90 degree in the left direciton
- **RIGHT** : turn robot by 90 degree in the right direction
- **REPORT** " returns the current postion & direction

## Not handled

- Command sanitization for commands exept `PLACE`. Eg: `MOVE ****` will still work
