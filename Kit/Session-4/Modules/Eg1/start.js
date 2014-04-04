/***
 * The goal of this file is to understanding about the module functions;
 *
 *
 * How to run this example:
 * 1. node start.js
 * 2. See the message get displayed on prompt.
 */


console.log('Starting...[start.js]');

var a = require('./program-a.js');
var b = require('./program-b.js');

console.log('In file start.js: a.done = %j, b.done = %j', a.done, b.done);