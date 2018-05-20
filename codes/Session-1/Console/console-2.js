/***
 * The goal of this file is to know about the console functions;
 * Used for printing standard outputs and errors. Similar to the console object
 * functions provided by most of the web browsers.
 *
 * How to run this example:
 * 1. node console-2.js
 * 2. See the message get displayed on prompt.
 */

/**
 * Prints to stdout.
 */
console.log("Log");

/**
 * Same as console.log prints to stdout.
 */
console.info("Info");

/**
 * Prints to stderr.
 */
console.error("Error");
console.error(new Error("This message is trigger with new Error()"))

/**
 * Same as console.log prints to stderr.
 */
console.warn("Warning");

/**
 * Prints to stderr, the string 'Trace: '
 */
console.trace('Here something went wrong, please check!');