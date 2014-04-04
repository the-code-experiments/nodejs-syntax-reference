/***
 * The goal of this file is to know about the file system functions;
 *
 *
 * How to run this example:
 * 1. node directory-2.js
 * 2. See the message get displayed on prompt.
 */

var fs = require('fs'),
	dirName = 'FixContent';

/***
 * Read a directory.
 */
fs.readdir(dirName, function(error, files) {
	if (error) throw error;
	console.log('Following are the directory contents: ');
	console.log(files);
});