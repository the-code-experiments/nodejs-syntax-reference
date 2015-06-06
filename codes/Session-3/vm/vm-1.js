/***
 * The goal of this file is to know about the VM functions;
 *
 *
 * How to run this example:
 * 1. node process-4.js
 * 2. See the message get displayed on prompt.
 */

var vm = require('vm');

var localVar = 'initial value';

var vmResult = vm.runInThisContext('localVar =  "vm";');
console.log('vmResult: ', vmResult);
console.log('localVar: ', localVar);

var evalResult = eval('localVar = "evanResult";');
console.log('evalResult: ', evalResult);
console.log('localVar: ', localVar);