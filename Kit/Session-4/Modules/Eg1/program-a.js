/***
 * The goal of this file is to understanding about the module functions;
 *
 * Supporting file: 
 *
 * How to run this example:
 * 1. node start.js
 * 2. See the message get displayed on prompt.
 */

console.log('Starting...[program-a.js]');

exports.done = false;

var b = require('./program-b.js');

console.log('In file program-a.js: b.done = %j', b.done);

exports.done = true;

console.log('a done');