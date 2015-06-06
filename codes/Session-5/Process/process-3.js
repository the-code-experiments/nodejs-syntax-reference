/***
 * The goal of this file is to know about the process functions;
 *
 *
 * How to run this example:
 * 1. node process-3.js
 * 2. See the message get displayed on prompt.
 */

console.log("User Environment Object: ", process.env);

console.log("NODE_VERSION: ", process.version);

console.log("Node and its dependencies: ", process.versions);

console.log("Process ID: ", process.pid);

console.log("This processor architecture is ", process.arch);

console.log("This platform is ", process.platform);

var util = require('util');
console.log(util.inspect(process.memoryUsage()))