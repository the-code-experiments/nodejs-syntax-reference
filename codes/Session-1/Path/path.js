/***
 * The goal of this file is to know about the path functions;
 * This module contains utilities for handling and transforming file paths.
 * These methods perform only string transformations.
 * NOTE: The file system is not consulted to check whether paths are valid.
 *
 * How to run this example:
 * 1. node path.js
 * 2. See the message get displayed on prompt.
 */

/***
 * Note: Use require('path') to get access to path based utility functions.
*/
const path = require('path');

/***
 * Path Normalize:
 * Normalize a string path, taking care of '..' and '.' parts.
 * When multiple slashes are found, they're replaced by a single one;
*/

console.log('Given path: D:////Projects///Nodejs///////TrainingKit');
console.log('Apply normalize: ' + path.normalize('D:////Projects///Nodejs///////TrainingKit'));


console.log('Given path: D:\\\Projects\Nodejs\\\\\\\\\\TrainingKit');
console.log('Apply normalize: ' + path.normalize('D:\\\Projects\Nodejs\\\\\\\\\\TrainingKit'));


console.log('Given path: D:\\Projects\\Nodejs\\..\\Backbone');
console.log('Apply normalize: ' + path.normalize('D:\\Projects\\Nodejs\\..\\Backbone'));


console.log('Given path: D:/Projects/Nodejs/../../Articles/Backbone');
console.log('Apply normalize: ' + path.normalize('D:/Projects/Nodejs/../../Articles/Backbone'));


/***
 * Return directory name of a path. 
 * Note: Nodejs is considered as file.
*/
console.log(path.dirname('D:/Projects/Nodejs'));


/***
 * Return the extension of the path.
*/
console.log(path.extname('index.html'));

console.log(path.extname('index.html.md'));

console.log(path.extname('index.'));

console.log(path.extname('index'));


/***
 * Return the last portion of a path.
*/
console.log(path.basename('D:/Projects/Nodejs/index.html'));

console.log(path.basename('D:/Projects/Nodejs/index.html', '.html'));

/***
 * Return the relative path from `from` to `to`
*/
console.log(path.relative('D:/Projects/Nodejs', 'D:/Projects/Backbone'));

console.log(path.relative('D:/Training/Nodejs', 'D:/Projects/Backbone'));

/***
 * Return the absolute path.
 * Note: need latest node.js version.
*/
// console.log(path.isAbsolute('D:/Projects/Nodejs')); // true
// console.log(path.isAbsolute('D:/Projects/Nodejs/os.html')); // false
// console.log(path.isAbsolute('.')); // false


/***
 * Resolves `to` to an absolute path.
 * It is as a sequence of cd commands in a shell.
*/
console.log(path.resolve('D:/Projects/Nodejs', './Architecture'));

console.log(path.resolve('D:/Projects/Nodejs', 'D:/Projects/Backbone'));

console.log(path.resolve('D:/Projects/Nodejs', '../Backbone'));

console.log(path.resolve('D:/', '/Projects', 'Nodejs', 'examples'));
console.log(path.resolve('D:/', '/Projects', '/Nodejs', 'examples'));
console.log(path.resolve('D:/', '/Projects', '/Nodejs', '/examples'));
console.log(path.resolve('D:/', 'Projects', 'Nodejs', 'examples'));

/***
 * Join all arguments and normalize the resulting path.
*/
console.log(path.join('D:/', 'Projects', 'Nodejs'));

console.log(path.join('D:/', 'Projects', 'Nodejs', '..', 'Backbone'));

// Throws exception.
// TypeError: Arguments to path.join must be strings.
// console.log(path.join('D:/', {}, 'Projects'));

/***
 * The [PLATFORM] specific file separator `\` or `/`.
*/
console.log('Projects\\Nodejs\\examples'.split(path.sep));

/***
 * The [PLATFORM] specific path delimiter `:` or `;`.
*/
console.log(process.env.PATH);
console.log(process.env.PATH.split(path.delimiter));

/***
 * Returns an object from a path string. 
 * Note: need latest node.js version.
 * OUTPUT: {
    	root : "C:\",
    	dir : "C:\path\dir",
    	base : "index.html",
    	ext : ".html",
    	name : "index"
	}
*/
// console.log(path.parse('D:\\projects\\Nodejs\\examples\os.html'));

/***
 * Returns an path string from an object. the opposite of path.parse
 * Note: need latest node.js version.
 * OUTPUT: 'D:/projects/Nodejs/examples/os.html'
*/
// path.format({
// 	root: "D:/",
// 	dir: "/projects/Nodejs/examples",
// 	base: "os.html",
// 	ext: ".html",
// 	name: "os"
// });