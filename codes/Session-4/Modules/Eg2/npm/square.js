/***
 * The goal of this file is to know about the Mobules functions;
 *
 *
 * Supporting file: 
 *
 * How to run this example:
 * 1. Execute start.js file to use this file.
 */

/*** 
 * This will behave as a constructor.
 * Also this will export a complete object in 1 assignment instead of building it 1 property at a time.
 */
module.exports = function(width) {
	return {
		area: function() {
			return width * width;
		}
	};
}