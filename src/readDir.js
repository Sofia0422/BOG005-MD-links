const fs = require('fs');
const path = require('path');

const argsTerminal = process.argv;

// Función para confirmar si un directorio existe
const isDirectory = (param) => {
  const stats = fs.statSync(param);
  // console.log('Es un directorio :', stats.isDirectory());
  return stats.isDirectory();
};

// Función para revisar los documentos dentro de un archivo
const contentDir = (param) => {
  const contentDirArray = fs.readdirSync(param);
  // console.log('Contenido del directorio: ', contentDirArray);
  return contentDirArray;
};

// Muestra los archivos md dentro del directorio
const mdFiles = (param) => {
  const mdExtFiles = path.extname(param) === '.md';
  // console.log('Es un archivo .md: ', mdExtFiles);
  return mdExtFiles;
};
// Función con recursividad para recorrer las carpetas y archivos consiguiendo los .md
const getMdFiles = (param) => {
  let allMdFiles = [];
  // console.log('Ruta :', param);
  if (!isDirectory(param)) {
    if (mdFiles(param)) {
      allMdFiles.push(param);
    }
  } else {
    // leer de forma asincrónica el contenido de un directorio
    const readDirectorFiles = fs.readdirSync(param);
    const absolutePath = readDirectorFiles.map((fileName) => path.join(param, fileName));
    absolutePath.forEach((fileNamePath) => {
      allMdFiles = allMdFiles.concat(getMdFiles(fileNamePath));
    });
  }
  // console.log(allMdFiles);
  return allMdFiles;
  // la función retorna un array con todos los archivos .md
};

isDirectory(argsTerminal[2]);
contentDir(argsTerminal[2]);
mdFiles(argsTerminal[2]);
getMdFiles(argsTerminal[2]);

module.exports = {
  isDirectory,
  getMdFiles,
};
