/***
 * The goal of this file is to know about the readline functions;
 *
 *
 * How to run this example:
 * 1. node readline-1.js
 * 2. See the message get displayed on prompt.
 */

var readline = require('readline');

var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question("What do you think of Node.js ? ", function(answer) {
	console.log("Thank you for your valuable feedback.", answer);

	rl.close();
});