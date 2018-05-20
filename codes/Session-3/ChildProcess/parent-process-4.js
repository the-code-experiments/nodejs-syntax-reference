/***
 * The goal of this file is to know about the child_process functions;
 *
 * How to run this example:
 * 1. node parent-process-4.js
 * 2. See the message get displayed on prompt.
 */
const { resolve } = require("path");
const { fork } = require("child_process");

const program = resolve("child-process-4.js");

const child = fork(program);

child.on('message', (message) => {
  console.log(`Message from Child: ${message}`);
  child.send('Hello Child!');
});