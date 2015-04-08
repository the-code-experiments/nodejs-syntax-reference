/***
 * The goal of this file is to know How to debug a node.js program;
 *
 *
 * How to run this example:
 * 1. node debug debugger-1.js
 * 2. See the message get displayed on prompt.
 */

/* Debug action commands
 * cont, c - Continue execution
 * next, n - Step next
 * step, s - Step in
 * out, o - Step out
 */

var x = 5;
var y = 10;

function Add(x, y) {
	debugger;
	return x + y;
}

Add(x, y);