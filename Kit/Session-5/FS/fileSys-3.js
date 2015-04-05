/***
 * The goal of this file is to know about the file system functions;
 *
 *
 * How to run this example:
 * 1. node fileSys-4.js
 * 2. See the message get displayed on prompt.
 */

var fs = require('fs'),
	path = require('path'),
	filename1 = path.normalize('FixContent/email2.txt');

/***
 * Keep a watch on file with watch.
 */
fs.watch(filename1, function(event, filename) {
	console.log('%s event got triggered.', event);
	if (filename) {
		console.log('%s is provided.', filename);
	} else {
		console.log('%s is not provided.', filename);
	}
});

/***
 * Keep a watch on file with watchFile.
 */
fs.watchFile(filename1, function(curr, prev) {
	console.log('The current modified time is: ' + curr.mtime);
	console.log('The previous modified time was: ' + prev.mtime);
});

/***
 * Unwatch a file.
 */
fs.unwatchFile(filename1);