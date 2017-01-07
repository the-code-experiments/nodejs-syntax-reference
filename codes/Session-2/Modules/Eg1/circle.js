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
const PI = Math.PI;

exports.area = (radius) => {
	return PI * radius * radius;
}

exports.circumference = (radius) => {
	return 2 * PI * radius;
}