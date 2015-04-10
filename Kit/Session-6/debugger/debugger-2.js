/***
 * The goal of this file is to know How to debug a node.js program;
 *
 *
 * How to run this example:
 * 1. node debug debugger-1.js
 * 2. See the message get displayed on prompt.
 */

/* Debug action commands
 * setBreakpoint(), sb() - Set breakpoint on current line.
 * watch(i)
 * setBreakpoint(line), sb(line) - Set breakpoint on specific line.
 */

var i = 0;

for (; i < 10; i++) {
	debugger;
}