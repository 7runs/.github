// Command-adapter wrapper: read the prompt on stdin, print the answer on stdout.
// This is the ~10-line shim a client writes to expose "any framework" to 7runs.
import { answer } from './logic.mjs';

let input = '';
process.stdin.on('data', (c) => (input += c));
process.stdin.on('end', () => {
  process.stdout.write(answer(input));
});
