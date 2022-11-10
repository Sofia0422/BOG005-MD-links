const fs = require('fs');
const marked = require('marked');
const argsTerminal = process.argv 


function infoLink(pathFile) {
  return new Promise((resolve, reject) => {
    fs.readFile(pathFile, "utf-8", (err, data) => {
      if (err) reject(err);
      
    });
  });
}


infoLink(argsTerminal[2]);



module.exports = {
  infoLink,
  
} 

