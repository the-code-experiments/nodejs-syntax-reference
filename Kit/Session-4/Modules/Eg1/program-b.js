/***
 * The goal of this file is to understanding about the module functions;
 *
 * Supporting file: 
 *
 * How to run this example:
 * 1. node start.js
 * 2. See the message get displayed on prompt.
 */

console.log('Starting...[program-b.js]');

exports.done = false;

var a = require('./program-a.js');

console.log('In file program-b.js:  a.done = %j', a.done);

exports.done = true;

console.log('b done');