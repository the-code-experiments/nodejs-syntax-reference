/***
 * The goal of this file is to know about the child_process functions;
 *
 * How to run this example:
 * 1. node child-process-1.js
 * 2. See the message get displayed on prompt.
 */

/**
 * The child_process module provides the ability to spawn child processes
 * in manner that is similar but not identical to popen (Pipe stream to or from a process)
 * 
 * By default, pipes for stdin, stdout and stderr are established between the parent Node.js process
 * and the spawned child. It is possible to stream data through these pipes in a non-blocking way.
 * 
 * The child_process.spawn method spawns the child process asynchronously, withour blocking the Node.js event loop.
 * The child_process.spawnSync is same in a synchronous manner which blocks event loop untile the process exits
 */
const spawn = require('child_process').spawn;

/**
 * On Window, spawn('cmd.exe', ['/c', 'my.bat']);
 */
const ls = spawn('ls', ['/usr', '/bin']);

ls.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`);
});

ls.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
});
