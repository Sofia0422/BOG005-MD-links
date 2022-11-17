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
      /* console.log(arrayLinks); */
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
  const arrayPromes = arrayLinks.map(obj => fetch(obj.href)
    .then((response) => ({      
      href: obj.href,      
      text: obj.text,
      file: obj.fileName,
      status: res.status,
      ok: res.ok ? 'OK' : 'FAIL'     
    }))
    .catch(() => ({
      href: obj.href,
      text: obj.text,
      file: obj.fileName,
      status: 500,
      ok: 'FAIL'
    })));      
    console.log(Promise.all(arrayPromes));  
  return Promise.all(arrayPromes);
}; 

//Genésis
/* const validateLinks = (array) => {
  array.forEach(obj  => {
    fetch(obj.href).then((response)=>{
      console.log(response.ok, 65);
   })    
  });
   console.log(array, 38);
}

readFileMd(argsTerminal).then((array)=> {
console.log(array, 35);
validateLinks(array);
}); */

readFileMd(argsTerminal).then((arrayLinks) =>{
  /*console.log(arrayLinks, 75);*/
  validateLinks(arrayLinks);
})




module.exports = {
  readFileMd,
  validateLinks,
};
