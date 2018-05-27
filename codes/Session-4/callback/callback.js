/***
 * The goal of this file is to show callback hell;
 *
 *
 * How to run this example:
 * 1. node callback.js
 */

/**
 * Callback hell look like
 * 
 * getData(function(a){  
    getMoreData(a, function(b){
      getMoreData(b, function(c){ 
        getMoreData(c, function(d){ 
          getMoreData(d, function(e){ 
              ...
          });
        });
      });
    });
  });
 */
const fs = require('fs');

const contentFile = __dirname + '/src/content.txt';

// Read file async
fs.readFile(contentFile, 'utf8', (error, content) => {  
  if (error) {
    return console.log(error);
  }

  content = content + '\nAppended something!';

  // Write file async
  fs.writeFile(contentFile, content, (error) => {
    if(error) {
      return console.log(error);
    }

    console.log(`Here is the file content: \n${content}`);
  });
});