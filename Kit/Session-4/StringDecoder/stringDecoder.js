/***
 * The goal of this file is to know about the string decoder functions;
 * A simple interface to buffer.toString() but provides additional support for utf8.
 *
 * How to run this example:
 * 1. node stringDecoder.js
 * 2. See the message get displayed on prompt.
 */

var cent = new Buffer([0x40]);
console.log(cent.toString());

var StringDecoder = require('string_decoder').StringDecoder;
var decoder = new StringDecoder('utf8');

/***
 * decoder.write returns a decoded string.
 */
cent = new Buffer([0xC2, 0xA2]);
console.log(decoder.write(cent));

var euro = new Buffer([0xE2, 0x82, 0xAC]);
console.log(decoder.write(euro));

