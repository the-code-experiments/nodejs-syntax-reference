/***
 * The goal of this file is to know about the readline functions;
 *
 *
 * How to run this example:
 * 1. node readline-5.js
 * 2. See the message get displayed on prompt.
 */

var readline = require('readline');

var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

readline.cursorTo(process.stdin, 20, 20);
readline.clearLine(process.stdin, 0);

rl.close();
