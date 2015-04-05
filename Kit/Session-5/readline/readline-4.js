/***
 * The goal of this file is to know about the readline functions;
 * and Tiny CLI.
 *
 * How to run this example:
 * 1. node readline-4.js
 * 2. See the message get displayed on prompt.
 */

var readline = require('readline');

var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.setPrompt('>> ');
rl.prompt();

rl.on('line', function(line) {

	switch (line.trim()) {
		case 'hi':
			console.log('world!');
			break;

		default:
			console.log('Say what? I might have heard `' + line.trim() + '`');
			break;
	}
	rl.prompt();
	
}).on('close', function() {
	console.log('Have a great day!');
	process.exit(0);
});