/***
 * The goal of this file is to know about the process functions;
 *
 *
 * How to run this example:
 * 1. node process-2.js
 * 2. See the message get displayed on prompt.
 */

console.log("Process ID: %s", process.pid);

console.log("Process Title: %s", process.title);

console.log("Process Arch: %s", process.arch);

console.log("Process Platform: %s", process.platform);

var util = require('util');
console.log(util.inspect(process.memoryUsage()));