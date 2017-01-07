/***
 * The goal of this file is to know about the child_process functions;
 *
 * How to run this example:
 * 1. node child-process-3.js
 * 2. See the message get displayed on prompt.
 */

/**
 * child_process.execFile(): spawns a shell and runs a command within that shell.
 * Passing the stdout and stderr to a callback function when complete.
 * 
 * execSync: a synchronous version and will block the event loop.
 */
const execFile = require('child_process').execFile;

/**
 * Since a shell is not spawned, behaviors such as I/O redirection and file globbing are not supported.
 */
execFile('node', ['--version'], (error, stdout, stderr) => {
    if (error) {
        console.error(`execFile error: ${error}`);
        return;
    }

    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
});