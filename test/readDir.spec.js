
const { getMdFiles } = require('../src/readDir');

describe('getMdFiles function', () => {

  it('Deberia ser una funcion', () => {
    expect(typeof getMdFiles).toBe('function');
  });

  it('Debería devolver todos los mdFiles de mocks de pruebas', () => {
    const secondTestRoute = 'C:/Users/Usuario/Documents/GitHub/BOG005-MD-links/__mocks__/mock-pruebas';
    const getMdFilesFunction = getMdFiles(secondTestRoute);
    const expectedResult = [
      'C:\\Users\\Usuario\\Documents\\GitHub\\BOG005-MD-links\\__mocks__\\mock-pruebas\\mock-md-file-2.md', 'C:\\Users\\Usuario\\Documents\\GitHub\\BOG005-MD-links\\__mocks__\\mock-pruebas\\mock-md-file.md'
    ];
    

    expect(getMdFilesFunction).toStrictEqual(expectedResult);    
  });
});
