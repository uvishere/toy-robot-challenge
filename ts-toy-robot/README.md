# Toy Robot Challenge
CLI Version: 1.0.0

## Overview
This 

## Installation
- clone this repo
- `cd ts-toy-robot`
- `npm i`
- `npm run dev`

## Usage


### Available commands
- **PLACE** x, y, DIRECTION
- **MOVE**
- **LEFT**
- **RIGHT**
- **REPORT**

## Not implemented/handled
- Iniital placement (commands returns `undefined` if the robot is not placed at first)
- Command sanitization for commands exept `PLACE`. Eg: `MOVE ****` will still work
