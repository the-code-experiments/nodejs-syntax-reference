/***
 * The goal of this file is to know about the readline functions;
 *
 *
 * How to run this example:
 * 1. node readline-3.js
 * 2. See the message get displayed on prompt.
 */

var readline = require('readline');

var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

// Emitted whenever the input stream receives a \n, usually received when the user hits enter, or return. 
rl.on('line', function(cmd) {
	console.log('You just typed: ' + cmd);
});

// Ctrl+C, Ctrl+D
rl.on('pause', function() {
	console.log('Readline paused');
});

// Ctrl+D
rl.on('close', function() {
	console.log('Readline closed');
});

rl.on('SIGINT', function() {
	rl.question('Are you sure you want to exit? ', function(answer) {
		if (answer.match(/^y(es)?$/i)) {
			rl.pause();
		}
	});
});