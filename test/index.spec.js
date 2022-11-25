const { mdLinks } = require('../src/index');
const { valFalse, valTrue } = require('./mdLinks-expected-result');

describe('mdLinks', () => {
    it ('Receives a directory and looks for links correctly - Receives Validate False', () => {
        
        const mockRoute = 'C:\\Users\\Usuario\\Documents\\GitHub\\BOG005-MD-links\\__mocks__\\mock-pruebas';
         return mdLinks(mockRoute).then((validationResult) => {
            expect(validationResult).toStrictEqual(valFalse);
        });
    })

    it ('Handles validate true returning an array of objects with status & ok', () => {
        
        const mockRoute = 'C:\\Users\\Usuario\\Documents\\GitHub\\BOG005-MD-links\\__mocks__\\mock-pruebas';
        return mdLinks(mockRoute, options={validate:true}).then((validationResult) => {
            expect(validationResult).toStrictEqual(valTrue);
        })
    })
})


        

    