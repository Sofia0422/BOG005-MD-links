const { mdLinks } = require('../src/index');
const { valFalse, valTrue } = require('./mdLinks-expected-result');

describe('mdLinks', () => {
    it ('Recibe un directorio y busca enlaces correctamente - Recibe Validate False', () => {
        
        const mockRoute = 'C:\\Users\\Usuario\\Documents\\GitHub\\BOG005-MD-links\\__mocks__\\mock-pruebas';
         return mdLinks(mockRoute).then((validationResult) => {
            expect(validationResult).toStrictEqual(valFalse);
        });
    })

    it ('Maneja validar verdadero devolviendo una matriz de objetos con estado y ok', () => {
        
        const mockRoute = 'C:\\Users\\Usuario\\Documents\\GitHub\\BOG005-MD-links\\__mocks__\\mock-pruebas';
        return mdLinks(mockRoute, options={validate:true}).then((validationResult) => {
            expect(validationResult).toStrictEqual(valTrue);
        })
    })
})


        

    