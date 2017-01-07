/***
 * The goal of this file is to know about the console functions;
 * Used for printing standard outputs and errors. Similar to the console object
 * functions provided by most of the web browsers.
 *
 * How to run this example:
 * 1. node console-1.js
 * 2. See the message get displayed on prompt.
 */

/***
 * console.log([arg1],...);
 * Note: Prints to stdout with newline. This function can take multiple arguments.
*/
console.log("Hi, My name is Ashwin Hegde");

const designation = "Sr. Software Engineer";
console.log("I am " + designation + " at Cybage Software Private Limited, Pune, HQ");

const experience = 2.6;
console.log("I have total %d of Experience, excluding 10 months as freelancer", experience); // %d is for both Integer & Float.

const languages = {
	"lang1": "JavaScript",
	"lang2": "Go",
	"lang3": "PHP",
	"lang4": "Python",
	"lang5": "Ruby",
	"lang6": "Java"
};
console.log("Printing output when used to print JSON Object via %s: ", languages); // %s for String
console.log("Printing output when used to print JSON Object via %j: ", languages); // %j for JSON

console.log("%s is Awesome.", "node");

/***
 * Same as console.log prints to stdout.
*/
console.info("Info: Information Message");

/***
 * Same as console.log but prints to stderr.
*/
console.error("Error: Error Message");
console.warn("Warn: Warning Message");

/***
 * console.time() will mark a time.
 * console.timeEnd() will finish timer, record output.
*/
console.time('calculation');
for (let i = 0; i < 1000000000; i++) {
  ;
}
console.timeEnd('calculation');