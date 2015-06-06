/***
 * The goal of this file is to know about the Mobules functions;
 *
 *
 * Supporting file: 
 *
 * How to run this example:
 * 1. Execute modules.js file to use this file.
 */

/***
 * PI is Private to this module.
 * 
 * Exports the function area() & circumference().
 */
var PI = Math.PI;

exports.area = function(radius) {
	return PI * radius * radius;
}

exports.circumference = function(radius) {
	return 2 * PI * radius;
}