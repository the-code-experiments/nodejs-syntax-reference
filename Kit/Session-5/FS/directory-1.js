/***
 * The goal of this file is to know about the file system functions;
 *
 *
 * How to run this example:
 * 1. node directory-1.js
 * 2. See the message get displayed on prompt.
 */

var fs = require('fs'),
	dirName = 'Folder1';

/***
 * Create a directory.
 */
fs.mkdir(dirName, function(error) {
	if (error) throw error;
	console.log('Directory created successfully.');
});

/***
 * Removed a directory.
 */
fs.rmdir(dirName, function(error) {
	if (error) throw error;
	console.log('Directory removed successfully.');
});
