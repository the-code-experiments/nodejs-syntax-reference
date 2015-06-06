/***
 * The goal of this file is to know about the console functions;
 * Used for printing standard outputs and errors. Similar to the console object
 * functions provided by most of the web browsers.
 *
 * How to run this example:
 * 1. node console-2.js 1>debug.log 2>errors.log [This will truncate the file to a length of zero]
 * OR 1. node console-2.js 1>>debug.log 2>>errors.log [This will append the messages]
 * 2. See the debug.log and errors.log generated files.
 */

/***
 * Prints to stdout.
*/
console.log("Log");

/***
 * Same as console.log prints to stdout.
*/
console.info("Info");

/***
 * Prints to stderr.
*/
console.error("Error");

/***
 * Same as console.log prints to stderr.
*/
console.warn("Warning");
