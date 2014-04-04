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
var path = require('path');

/***
 * Path Normalize:
 * Normalize a string path, taking care of '..' and '.' parts.
 * When multiple slashes are found, they're replaced by a single one;
*/

console.log('Given path: D:////Projects///NodeJS///////TrainingKit');
console.log('Apply normalize: ' + path.normalize('D:////Projects///NodeJS///////TrainingKit'));


console.log('Given path: D:\\\Projects\NodeJS\\\\\\\\\\TrainingKit');
console.log('Apply normalize: ' + path.normalize('D:\\\Projects\NodeJS\\\\\\\\\\TrainingKit'));


console.log('Given path: D:\\Projects\\NodeJS\\..\\Backbone');
console.log('Apply normalize: ' + path.normalize('D:\\Projects\\NodeJS\\..\\Backbone'));


console.log('Given path: D:/Projects/NodeJS/../../Articles/Backbone');
console.log('Apply normalize: ' + path.normalize('D:/Projects/NodeJS/../../Articles/Backbone'));


/***
 * Return directory name of a path.
*/
console.log(path.dirname('D:/Projects/NodeJS'));


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
console.log(path.basename('D:/Projects/NodeJS/index.html'));

console.log(path.basename('D:/Projects/NodeJS/index.html', '.html'));

/***
 * Return the relative path from `from` to `to`
*/
console.log(path.relative('D:/Projects/NodeJS', 'D:/Projects/Backbone'));

console.log(path.relative('D:/Training/NodeJS', 'D:/Projects/Backbone'));

/***
 * Resolves `to` to an absolute path.
*/
console.log(path.resolve('D:/Projects/NodeJS', './Architecture'));

console.log(path.resolve('D:/Projects/NodeJS', 'D:/Projects/Backbone'));

console.log(path.resolve('D:/Projects/NodeJS', '../Backbone'));

/***
 * Join the path.
*/
console.log(path.join('D:/', 'Projects', 'NodeJS'));

console.log(path.join('D:/', 'Projects', 'NodeJS', '..', 'Backbone'));

/***
 * The [PLATFORM] specific file separator `\` or `/`.
*/
console.log('D:/Projects/NodeJS'.split(path.sep));

/***
 * The [PLATFORM] specific path delimiter `:` or `;`.
*/
console.log(process.env.PATH);
console.log(process.env.PATH.split(path.delimiter));
