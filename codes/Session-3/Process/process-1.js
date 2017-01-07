/***
 * The goal of this file is to know about the process functions;
 *
 *
 * How to run this example:
 * 1. node process-1.js OR
 * 1. node process-1.js one two three
 * 2. See the message get displayed on prompt.
 */

process.argv.forEach((val, index, array) => {
	console.log(index + ": " + val);
});