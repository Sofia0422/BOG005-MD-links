const fsp = require('fs').promises;

const argsTerminal = process.argv;
const axios = require('axios').default;

const readfilePromise = (path) => {
  const linksArray = [];
  const reg = /\[(.+)\]\((https?:\/\/[^\s]+)(?: "(.+)")?\)|(https?:\/\/[^\s]+)/gi;
  return fsp.readFile(path, 'utf-8').then((data) => {
    const links = data.match(reg);
    if (links === null) {
      const file = path.split('\\').pop().split('/').pop();
      console.log('No se encontraron enlaces en el archivo ', file);
    } else {
      for (const i in links) {
        const text = reg.exec(links[i]);
        if (text === null || text === undefined) {
          continue;
        } else {
          const filteredLinks = text.filter((link) => link !== undefined);
          const data_json = { href: filteredLinks[2], text: filteredLinks[1], file: path };
          linksArray.push(data_json);
        }
      }
    }
    /*  console.log(linksArray) */
    return linksArray;
  });
};

const extractLinks = (paths) => {
  const promiseArray = [];
  for (const path of paths) {
    promiseArray.push(readfilePromise(path));
  }
  return Promise.all(promiseArray).then((values) => values.flat());
};

const validateLink = (url) => {
  let linkOk = {};
  return axios.get(url)
    .then((response) => {
      linkOk = {
        status: response.status,
        ok: response.statusText,
      };
      return linkOk;
    })
    .catch((e) => {
      if ((e.response !== null) || (e.response !== undefined)) {
        linkOk.status = 404;
      } else {
        linkOk.status = e.response.status;
      }
      linkOk.ok = 'Fail';
      console.log(linkOk);
      return linkOk;
    });
};

const validateLinks = (urls, options) => {
  const promises = [];
  if (options) {
    for (let i = 0; i < urls.length; i++) {
      const aUrl = urls[i].href;
      promises.push(validateLink(aUrl).then((link) => {
        const newLinks = Object.assign(urls[i], link);
        return newLinks;
      }));
    }
    /* console.log(Promise.all(promises)); */
    return Promise.all(promises);
  }
  console.log(Promise.resolve(urls));
  return Promise.resolve(urls);
};

readfilePromise(argsTerminal[2]);
validateLinks(argsTerminal[2]);

module.exports = {
  readfilePromise,
  extractLinks,
  validateLinks,
};
