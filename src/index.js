const { readAllFilesMds, validateLinks } = require("./links");
const { isPathAbsolute } = require("./path");
const { getMdFiles } = require("./readDir");

const rutaTerminal = process.argv[2]

const mdLinks = (path, options={validate:true}) => {
    return new Promise((resolve, reject) =>{
        const absolutePaht = isPathAbsolute(path)
        const arrayMds = getMdFiles(absolutePaht)
        if(options.validate===true) {
            readAllFilesMds(arrayMds)
            .then(response=> validateLinks(response))
            .then(resp => resolve(resp))
        } else {
            readAllFilesMds(arrayMds)
            .then(response=> resolve(response))
        }
    })
}
mdLinks(rutaTerminal).then(res=>console.log('jlaskjlasjlkajlj', res))













//Tati
// Aqui debo exportar una función (mdLinks).
/* const { isPathAbsolute, isPathExist } = require('./path');
const { validateLinks, readAllFilesMds } = require('./links');
const { getMdFiles } = require('./readDir');
const argsTerminal = process.argv[2];
// -----Funcion Mdlinks-----//
const mdLinks = (path, option = {validate: false}) => new Promise((resolve, reject) => {  
    //Convertir la ruta a absoluta
      const pathArgAbsolut = isPathAbsolute(path);
    
    //Validar si la ruta existe
      const validatePathRes = isPathExist(pathArgAbsolut);
    //Declarar array vacio para guardar archivo .md desde getMdFiles
    let arrayMdFile = [];
    
    //Condicional, si la ruta es valida obtiene  archivos .md
    if (validatePathRes === false) {
        reject('INVALID PATH');
    } else if (validatePathRes) {
        const filesMd = getMdFiles(arrayMdFile, pathArgAbsolut); //Funcion recursiva que revisa el directorio
        if (filesMd.length === 0) { //Si el directorio es vacio
          reject('EMPTY DIRECTORY');
        } else {
            readAllFilesMds(arrayMdFile)
            .then((objectLinks) => {
              if (objectLinks.length === 0) { //Si el documento no tiene links
                reject('EMPTY FILE');
              } else {
                if (option.validate === true) {
                    validateLinks(objectLinks).then(response => {
                    resolve(response)
                  })
                } else {
                  resolve(objectLinks);
                }
              }
            })
        }
      }
});
    
mdLinks(argsTerminal).then(rest => console.log(`respuesta md-links:
${rest}`))
.catch(err=>console.log(err)); 

module.exports = { 
    mdLinks
}; */

//Sofia
/* const { validateLinks, readAllFilesMds  } = require("./links");
const { isPathAbsolute } = require("./path");
const { getMdFiles } = require("./readDir");
const argsTerminal = process.argv[2];

const mdLinks = (path, options={validate:false}) => {
    let absolutePath = isPathAbsolute(path)
    let result = getMdFiles(absolutePath)

    return new Promise((resolve, reject) =>{
        if (options.validate === true) {
            readAllFilesMds(result)
            .then(res => {
                console.log(res, 92);
                Promise.all(res).then (x => {
                    resolve.validateLinks(x.flat()).then((linksResponse) => linksResponse)
                })
            })
        }else {
            readAllFilesMds(result)
            .then(res => {
                Promise.all(res).then(x => {
                    resolve(x.flat())
                })
            })
        }
    })
}
mdLinks(argsTerminal)

module.exports = {
    mdLinks
} */
    