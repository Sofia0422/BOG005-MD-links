const path = require('path');
const fs = require('fs');

const argsTerminal = process.argv[2];

const isPathExist = (param) => {
  if (!fs.existsSync(param)) {
    /* console.log('La ruta no existe'); */
  } else {
    /* console.log('La ruta existe. Puede continuar'); */
  }
};

const isPathAbsolute = (param) => {
  if (!path.isAbsolute(param)) {
    /* console.log('es relativa'); */
    /* console.log('Ahora es absoluta', path.resolve(param)); */
    return path.resolve(param);
  }
  /* console.log('es absoluta'); */
  return param;
};

isPathExist(argsTerminal);
isPathAbsolute(argsTerminal);

module.exports = {
  isPathExist,
  isPathAbsolute,
};