import * as readline from 'readline-sync';
import { Command } from './lib/command';
import { Robot } from './lib/robot';

const robot = new Robot();

while (true) {
  const input = readline.prompt();
  if (input === 'bye') {
    break;
  }
  Command.run(robot, input);
}
