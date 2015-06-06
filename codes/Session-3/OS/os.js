/***
 * The goal of this file is to know about the Operating System functions;
 *
 * We need to use require('os') Build-In NPM to get access to dew basic
 * operating system related utility functions.
 *
 * How to run this example:
 * 1. node os.js
 * 2. See the message get displayed on prompt.
 */

/***
 * Note: Use require('os') to get access to os based utility functions.
*/
var os = require('os');

/***
 * Returns the hostname of the operating system.
*/
console.info("Hostname is: %s", os.hostname());

/***
 * Returns the name of the operating system.
*/
console.info("Type is %s", os.type());

/***
 * Returns the platform of the operating system.
*/
console.info("Platform is %s", os.platform());

/***
 * Returns the operating system's default directory for temp files.
*/
console.info("Default OS directory for temp files: %s", os.tmpdir());

/***
 * Returns the operating system CPU architecture.
*/
console.info("CPU Architecture is %s", os.arch());

/***
 * Returns the operating system release.
*/
console.info("Release is %s", os.release());

/***
 * Returns the operating system total amount of system memory in bytes.
*/
console.info("Total amount of system memory is %d in bytes", os.totalmem());

/***
 * Returns the operating system the amount of free system memory in bytes.
*/
console.info("Total amount of free system memory is %d in bytes", os.freemem());

/***
 * Returns an array of objects containing information about each CPU/core installed:
 * model, speed (in MHz), and times
*/
console.info("Information about CPU/Core Installed:\n");
console.info(os.cpus());

/***
 * Returns get a list of network interfaces:
*/
console.info("List of network interfaces:\n");
console.info(os.networkInterfaces());