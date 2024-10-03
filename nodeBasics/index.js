import chalk from 'chalk';

const error = chalk.red;
const warning = chalk.yellow;
const success = chalk.green;

console.log(error("Ooops, something went wrong"));
console.log(warning("Warning displays, please take a look on this line"));
console.log(success("Everithing is okay, keep it out"));