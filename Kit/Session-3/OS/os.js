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
console.log("Type is %s", os.type());

/***
 * Returns the platform of the operating system.
*/
console.log("Platform is %s", os.platform());

/***
 * Returns the operating system CPU architecture.
*/
console.log("CPU Architecture is %s", os.arch());

/***
 * Returns the operating system release.
*/
console.log("Release is %s", os.release());

/***
 * Returns the operating system uptime in seconds.
*/
console.log("Uptime is %d Seconds", os.uptime());

/***
 * Returns the operating system total amount of system memory in bytes.
*/
console.log("Total amount of system memory is %d in bytes", os.totalmem());

/***
 * Returns the operating system the amount of free system memory in bytes.
*/
console.log("Total amount of free system memory is %d in bytes", os.freemem());

/***
 * Returns the operating system's default directory for temp files.
*/
console.log("Temp directory is", os.tmpDir());

/***
 * Returns an array of objects containing information about each CPU/core installed:
 * model, speed (in MHz), and times
*/
console.log("Information about CPU/Core Installed:\n");
console.log(os.cpus());

/***
 * Returns get a list of network interfaces:
*/
console.log("List of network interfaces:\n");
console.log(os.networkInterfaces());