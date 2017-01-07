/***
 * The goal of this file is to know about the string decoder functions;
 * A simple interface to buffer.toString() but provides additional support for utf8.
 *
 * How to run this example:
 * 1. node stringDecoder.js
 * 2. See the message get displayed on prompt.
 */

const cent = new Buffer([0x40]);
console.log(cent.toString());

const StringDecoder = require('string_decoder').StringDecoder;
const decoder = new StringDecoder('utf8');

/***
 * decoder.write returns a decoded string.
 */
cent = new Buffer([0xC2, 0xA2]);
console.log(decoder.write(cent));

const euro = new Buffer([0xE2, 0x82, 0xAC]);
console.log(decoder.write(euro));

