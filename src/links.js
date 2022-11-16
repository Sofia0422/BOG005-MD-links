const fs = require('fs');
const marked = require('marked');
const fecth = require('node-fetch');

const argsTerminal = process.argv;

const readFileMd = (fileMd) => {
  const arrayLinks = [];
  return new Promise((resolve, reject) => {
    fs.readFile(fileMd, 'utf-8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        const renderer = new marked.Renderer();
        renderer.link = (href, title, text) => {
          const infoLinks = {
            href,
            title: text,
            file: fileMd,
          };
          if (infoLinks.href.includes('http')) {
            arrayLinks.push(infoLinks);
          }
        };
        marked.marked(data, { renderer });
      }
      /* console.log(arrayLinks); */
      resolve(arrayLinks);
    });
  });
};

const readAllFilesMds = (arrayMdFiles) => {
  /* console.log('Obtener arrayMds', arrayMdFiles); */
  const arrLinks = arrayMdFiles.map((fileMd) => readFileMd(fileMd));
  return Promise.all(arrLinks).then((res) => res.flat());
};
const validateLinks = (array) => {
  array.forEach(obj  => {
    fetch(obj.href).then((response)=>{
      console.log(response.status, 41);

    })
    
  });
 /*  console.log(array, 38); */
  

}

readFileMd(argsTerminal[2]).then((array)=> {
  /* console.log(array, 35); */
validateLinks(array);

});


module.exports = {
  readFileMd,
  readAllFilesMds,
};
