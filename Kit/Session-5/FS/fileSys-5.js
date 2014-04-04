/***
 * The goal of this file is to know about the file system functions;
 *
 *
 * How to run this example:
 * 1. node fileSys-5.js
 * 2. See the message get displayed on prompt.
 */

var fs = require('fs'),
	path = require('path'),
	filename1 = path.normalize('FixContent/email2.txt');

/***
 * createReadStream a file.
 */
var data = fs.createReadStream(filename1, {flags:'r', encoding:'utf-8', start:2, end:8, autoClose:true});
console.log(data);

/***
 * createWriteStream a file.
 */

