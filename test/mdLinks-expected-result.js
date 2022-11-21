const valFalse = [
    {
      href: 'https://www.google.com*******/',
      title: 'https://www.google.com*******/',
      file: 'C:\\Users\\Usuario\\Documents\\GitHub\\BOG005-MD-links\\__mocks__\\mock-directory\\mock-md-file-2.md'
    },
    {
      href: 'https://www.facebook.com***/',
      title: 'https://www.facebook.com***/',
      file: 'C:\\Users\\Usuario\\Documents\\GitHub\\BOG005-MD-links\\__mocks__\\mock-directory\\mock-md-file-2.md'
    },
    {
      href: 'https://www.facebook.co===m*/',
      title: 'https://www.facebook.co===m*/',
      file: 'C:\\Users\\Usuario\\Documents\\GitHub\\BOG005-MD-links\\__mocks__\\mock-directory\\mock-md-file-2.md'
    },
    {
      href: 'https://curriculum.laboratoria.la/es/topics/javascript/04-arrays',
      title: 'Arreglos',
      file: 'C:\\Users\\Usuario\\Documents\\GitHub\\BOG005-MD-links\\__mocks__\\mock-directory\\mock-md-file.md'
    },
    {
      href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/',
      title: 'Array - MDN',
      file: 'C:\\Users\\Usuario\\Documents\\GitHub\\BOG005-MD-links\\__mocks__\\mock-directory\\mock-md-file.md'
    },
    {
      href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort',
      title: 'Array.prototype.sort() - MDN',
      file: 'C:\\Users\\Usuario\\Documents\\GitHub\\BOG005-MD-links\\__mocks__\\mock-directory\\mock-md-file.md'
    },
    {
      href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach',
      title: 'Array.prototype.forEach() - MDN',
      file: 'C:\\Users\\Usuario\\Documents\\GitHub\\BOG005-MD-links\\__mocks__\\mock-directory\\mock-md-file.md'
    },
    {
      href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map',
      title: 'Array.prototype.map() - MDN',
      file: 'C:\\Users\\Usuario\\Documents\\GitHub\\BOG005-MD-links\\__mocks__\\mock-directory\\mock-md-file.md'
    },
    {
      href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter',
      title: 'Array.prototype.filter() - MDN',
      file: 'C:\\Users\\Usuario\\Documents\\GitHub\\BOG005-MD-links\\__mocks__\\mock-directory\\mock-md-file.md'
    },
    {
      href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce',
      title: 'Array.prototype.reduce() - MDN',
      file: 'C:\\Users\\Usuario\\Documents\\GitHub\\BOG005-MD-links\\__mocks__\\mock-directory\\mock-md-file.md'
    },
    {
      href: 'https://curriculum.laboratoria.la/es/topics/javascript/05-objects/01-objects',
      title: 'Objetos en JavaScript',
      file: 'C:\\Users\\Usuario\\Documents\\GitHub\\BOG005-MD-links\\__mocks__\\mock-directory\\mock-md-file.md'
    },
    {
      href: 'https://curriculum.laboratoria.la/es/topics/javascript/02-flow-control/01-conditionals-and-loops',
      title: 'Estructuras condicionales y repetitivas',
      file: 'C:\\Users\\Usuario\\Documents\\GitHub\\BOG005-MD-links\\__mocks__\\mock-directory\\mock-md-file.md'
    },
    {
      href: 'https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/conditionals',
      title: 'Tomando decisiones en tu código — condicionales - MDN',
      file: 'C:\\Users\\Usuario\\Documents\\GitHub\\BOG005-MD-links\\__mocks__\\mock-directory\\mock-md-file.md'
    }
  ];
  
  const valTrue = [
    {
      href: 'https://www.google.com*******/',
      text: 'https://www.google.com*******/',
      file: 'C:\\Users\\Usuario\\Documents\\GitHub\\BOG005-MD-links\\__mocks__\\mock-directory\\mock-md-file-2.md',
      status: 404,
      ok: 'FAIL'
    },
    {
      href: 'https://www.facebook.com***/',
      text: 'https://www.facebook.com***/',
      file: 'C:\\Users\\Usuario\\Documents\\GitHub\\BOG005-MD-links\\__mocks__\\mock-directory\\mock-md-file-2.md',
      status: 404,
      ok: 'FAIL'
    },
    {
      href: 'https://www.facebook.co===m*/',
      text: 'https://www.facebook.co===m*/',
      file: 'C:\\Users\\Usuario\\Documents\\GitHub\\BOG005-MD-links\\__mocks__\\mock-directory\\mock-md-file-2.md',
      status: 500,
      ok: 'FAIL'
    },
    {
      href: 'https://curriculum.laboratoria.la/es/topics/javascript/04-arrays',
      text: 'Arreglos',
      file: 'C:\\Users\\Usuario\\Documents\\GitHub\\BOG005-MD-links\\__mocks__\\mock-directory\\mock-md-file.md',
      status: 200,
      ok: 'OK'
    },
    {
      href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/',
      text: 'Array - MDN',
      file: 'C:\\Users\\Usuario\\Documents\\GitHub\\BOG005-MD-links\\__mocks__\\mock-directory\\mock-md-file.md',
      status: 200,
      ok: 'OK'
    },
    {
      href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort',
      text: 'Array.prototype.sort() - MDN',
      file: 'C:\\Users\\Usuario\\Documents\\GitHub\\BOG005-MD-links\\__mocks__\\mock-directory\\mock-md-file.md',
      status: 200,
      ok: 'OK'
    },
    {
      href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach',
      text: 'Array.prototype.forEach() - MDN',
      file: 'C:\\Users\\Usuario\\Documents\\GitHub\\BOG005-MD-links\\__mocks__\\mock-directory\\mock-md-file.md',
      status: 200,
      ok: 'OK'
    },
    {
      href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map',
      text: 'Array.prototype.map() - MDN',
      file: 'C:\\Users\\Usuario\\Documents\\GitHub\\BOG005-MD-links\\__mocks__\\mock-directory\\mock-md-file.md',
      status: 200,
      ok: 'OK'
    },
    {
      href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter',
      text: 'Array.prototype.filter() - MDN',
      file: 'C:\\Users\\Usuario\\Documents\\GitHub\\BOG005-MD-links\\__mocks__\\mock-directory\\mock-md-file.md',
      status: 200,
      ok: 'OK'
    },
    {
      href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce',
      text: 'Array.prototype.reduce() - MDN',
      file: 'C:\\Users\\Usuario\\Documents\\GitHub\\BOG005-MD-links\\__mocks__\\mock-directory\\mock-md-file.md',
      status: 200,
      ok: 'OK'
    },
    {
      href: 'https://curriculum.laboratoria.la/es/topics/javascript/05-objects/01-objects',
      text: 'Objetos en JavaScript',
      file: 'C:\\Users\\Usuario\\Documents\\GitHub\\BOG005-MD-links\\__mocks__\\mock-directory\\mock-md-file.md',
      status: 200,
      ok: 'OK'
    },
    {
      href: 'https://curriculum.laboratoria.la/es/topics/javascript/02-flow-control/01-conditionals-and-loops',
      text: 'Estructuras condicionales y repetitivas',
      file: 'C:\\Users\\Usuario\\Documents\\GitHub\\BOG005-MD-links\\__mocks__\\mock-directory\\mock-md-file.md',
      status: 200,
      ok: 'OK'
    },
    {
      href: 'https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/conditionals',
      text: 'Tomando decisiones en tu código — condicionales - MDN',
      file: 'C:\\Users\\Usuario\\Documents\\GitHub\\BOG005-MD-links\\__mocks__\\mock-directory\\mock-md-file.md',
      status: 200,
      ok: 'OK'
    }
  ];
  
  module.exports = {
    valFalse,
    valTrue,
  };