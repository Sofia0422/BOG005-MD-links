const path = require('path');
const fs = require('fs');

const argsTerminal = process.argv 

const isPathExist = (param) => {
    if (!fs.existsSync(param)){
        console.log('La ruta no existe') 
    }else {
        console.log('La ruta existe. Puede continuar')
    }
}

const isPathAbsolute = (param) => {
    if (!path.isAbsolute(param)){
        console.log('es relativa')
        console.log('Ahora es absoluta', path.resolve(param))
        return path.resolve(param)
    }else {
        console.log('es absoluta')            
        return param
    }
}  

isPathExist(argsTerminal[2]);
isPathAbsolute(argsTerminal[2]);


module.exports = { 
    isPathExist, 
   isPathAbsolute, 
}




/* const path = require ('path'); 
const process = require ('process'); 
const argsTerminal = process.argv;  
 
// validar ruta   
const validatePath = (thePath) => { 
    let newPath;      
        
    if (thePath == undefined || thePath === "") {
          console.log('Debe ingresar una ruta');     
        } else if (!path.isAbsolute(thePath)){
            console.log('es relativa')
            console.log(path.resolve(thePath))
            newPath = path.resolve(thePath)            
        } else {
            console.log('es absoluta')            
            newPath = thePath
        }                
}     

validatePath(argsTerminal[2]); */