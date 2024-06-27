export function isValidInput(input: string): true | false {
  console.log('supplied input', input);
  const validCommands =
    /^(PLACE [0-4],\s*[0-4],\s*(NORTH|SOUTH|EAST|WEST)|MOVE|LEFT|RIGHT|DOWN|UP)$/;
  if (validCommands.test(input) === false) {
    console.log('Invalid command');
    return false;
  }
  return true;
}
