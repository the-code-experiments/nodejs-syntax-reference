/***
 * The goal of this file is to know about the console functions;
 * Used for printing standard outputs and errors. Similar to the console object
 * functions provided by most of the web browsers.
 *
 * How to run this example:
 * 1. node console-3.js
 * 2. See the message get displayed on prompt.
 */

/***
 * Prints in form of tabular data.
 * Note: Node >= v10.0.0
 */
console.table([
  {
    name: "Ashwin Hegde",
    email: "ashwin.hegde3@gmail.com"
  },
  {
    name: "Hegde Ashwin",
    email: "ashwin.hegde3@yahoo.com"
  }
])

/**
 * This method does not display anything unless used in the inspector.
 * Start the current JS CPU profiling with the optional label 
 * Note: Node >= v8.0.0
 */
console.profile("Show_Performance");
console.log('Hello World!');
console.profileEnd();

/**
 * This method helps to create nesting block
 */
console.log("This is the level 1 message");
console.group();
  console.log("This is the level 2 message");
  console.group();
    console.log("This is the level 3 message");
  console.groupEnd();
console.groupEnd();