var chalk = require("chalk");

var message = "Hello " + chalk.black.bgWhite.bold("World");
console.log(message);

const error = chalk.bold.red;
const warning = chalk.keyword('orange');

console.log(error('Error!'));
console.log(warning('Warning!'));
