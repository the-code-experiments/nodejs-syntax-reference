/***
 * The goal of this file is to know about the process functions;
 *
 *
 * How to run this example:
 * 1. node process-1.js
 * 2. See the message get displayed on prompt.
 */

console.log('Starting directory: ' + process.cwd());

try {
	process.chdir('../');
	console.log('New directory: ' + process.cwd());
} catch (error) {
	console.log('Chdir: ' + error);
}