/***
 * The goal of this file is to show How to avoid callback hell 
 * using Async await approach
 *
 *
 * How to run this example:
 * 1. node asyncAwait.js
 */

// Note: To run this program you will need Node.js v10.0.0 or above

const fs = require('fs');

const contentFile = __dirname + '/src/content.txt';

const notifyUser = (error) => {  
  if(error) {
    return console.log(error);
  }
  console.log('Appended text!');
};

const appendText = async (error, content) => {  
  if (error) return console.log(error);

  content = content + '\nAppended something!';
  await fs.writeFile(contentFile, content, notifyUser);
}

const readFileContent = async () => {
  await fs.readFile(contentFile, 'utf8', appendText);
}

readFileContent()
  .catch(error => console.log(`Something went wrong: \n${error}`))