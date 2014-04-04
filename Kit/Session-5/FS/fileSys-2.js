/***
 * The goal of this file is to know about the file system functions;
 *
 *
 * How to run this example:
 * 1. node fileSys-2.js
 * 2. See the message get displayed on prompt.
 */

var fs = require('fs'),
	path = require('path'),
	filename1 = path.normalize('FixContent/email1.txt'),
	filename2 = path.normalize('FixContent/email15.txt');

/***
 * Check a file already exists.
 */
fs.exists(filename1, function(exists) {
	if (exists) {
		console.log('%s already exists.', filename1);
	} else {
		console.log('%s does not exists.', filename1);
	}
});


/***
 * Check a file already exists.
 */
fs.exists(filename2, function(exists) {
	if (exists) {
		console.log('%s already exists.', filename2);
	} else {
		console.log('%s does not exists.', filename2);
	}
});