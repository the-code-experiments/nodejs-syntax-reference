/***
 * The goal of this file is to know about the file system functions;
 *
 *
 * How to run this example:
 * 1. node mixSys-1.js
 * 2. See the message get displayed on prompt.
 */

const fs = require('fs');
const path = require('path');
const filename1 = path.normalize('FixContent/email1.txt');
const dirname1 = path.normalize('FixContent/FixInnerContent');

/***
 * Stats of the file.
 */
fs.stat(filename1, (error, stats) => {
	if (error) throw error;
	console.log('%s stats: %j', filename1, stats);
});

/***
 * Stats of the directory.
 */
fs.stat(dirname1, (error, stats) => {
	if (error) throw error;
	console.log('%s stats: %j', dirname1, stats);
});

/***
 * Check path is file or not.
 */
fs.stat(filename1, (error, stats) => {
	if (error) throw error;
	if (stats.isFile()) {
		console.log('%s is a file.', filename1);
	} else {
		console.log('%s is not a file.', filename1);
	}
});

/***
 * Check path is directory or not.
 */
fs.stat(dirname1, (error, stats) => {
	if (error) throw error;
	if (stats.isDirectory()) {
		console.log('%s is a directory.', dirname1);
	} else {
		console.log('%s is not a directory.', dirname1);
	}
});