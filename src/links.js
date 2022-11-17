const fs = require('fs');
const marked = require('marked');
const fetch = require('node-fetch');

const argsTerminal = process.argv[2];

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
      console.log(arrayLinks, 27);
      resolve(arrayLinks);
    });
  });
};

/* const readAllFilesMds = (arrayMdFiles) => {
  /* console.log('Obtener arrayMds', arrayMdFiles); */
  /*const arrLinks = arrayMdFiles.map((fileMd) => readFileMd(fileMd));
  return Promise.all(arrLinks).then((res) => res.flat());
/*}; */

//Tati
const validateLinks = (arrayLinks) => {
  const arrayPromes = arrayLinks.map(obj =>fetch(obj.href)
    .then((response) => ({      
      href: obj.href,      
      text: obj.title,
      file: obj.file,
      status: res.status,
      ok: res.ok ? 'OK' : 'FAIL'     
  }))
    .catch(() => ({
      href: obj.href,
      text: obj.title,
      file: obj.file,
      status: 500,
      ok: 'FAIL'
    })));  
       const promesa = Promise.all(arrayPromes)
    console.log(promesa); 
  return promesa;
};  


readFileMd(argsTerminal).then((arrayLinks) =>{
 /*  console.log(arrayLinks, 75); */
  validateLinks(arrayLinks).then((param)=>{
    console.log(param);
  })
}) 

module.exports = {
  readFileMd,
  validateLinks,
};
