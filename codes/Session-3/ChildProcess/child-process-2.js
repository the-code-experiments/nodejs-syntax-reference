/***
 * The goal of this file is to know about the child_process functions;
 *
 * How to run this example:
 * 1. node child-process-2.js
 * 2. See the message get displayed on prompt.
 */

/**
 * child_process.exec(): spawns a shell and runs a command within that shell.
 * Passing the stdout and stderr to a callback function when complete.
 * 
 * execSync: a synchronous version and will block the event loop.
 */
const { exec } = require('child_process');

/**
 * If a callback function is provided, it is called with the arguments (error, stdout, stderr)
 * On success, error will be null.
 * On error, error will be an instance of Error
 * 
 * The error.code property will be the exit code of the child process
 * Any exit code other than 0 is considered to be an error.
 * 
 * By default, Node.js will decode the output as UTF-8 and pass strings to the callback
 */
const cat = exec('cat ./FixContent/Hello.txt | wc -l', (error, stdout, stderr) => {
    if (error) {
        console.error(`exec error: ${error}`);
        return;
    }

    // Either use this or event handler
    // console.log(`stdout: ${stdout}`);
    // console.log(`stderr: ${stderr}`); 
});

cat.stdout.on('data', (data) => {
    console.log(`stdout: \n${data}`);
});

cat.stderr.on('data', (data) => {
    console.log(`stderr: \n${data}`);
});