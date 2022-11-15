/* eslint-disable eol-last */
const path = require('path');
const fs = require('fs');

/* const argsTerminal = process.argv; */

const isPathExist = (param) => {
  if (!fs.existsSync(param)) {
    console.log('La ruta no existe');
  } else {
    console.log('La ruta existe. Puede continuar');
  }
};

const isPathAbsolute = (param) => {
  if (!path.isAbsolute(param)) {
    console.log('es relativa');
    console.log('Ahora es absoluta', path.resolve(param));
    return path.resolve(param);
  }
  console.log('es absoluta');
  return param;
};

/* isPathExist(argsTerminal[2]);
isPathAbsolute(argsTerminal[2]); */

module.exports = {
  isPathExist,
  isPathAbsolute,
};