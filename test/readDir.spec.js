
const { getMdFiles } = require('../src/readDir');

describe('getMdFiles function', () => {

  it('Should be a function', () => {
    expect(typeof getMdFiles).toBe('function');
  });

  it('Should return all mdFiles from mock pruebas', () => {
    const secondTestRoute = 'C:/Users/Usuario/Documents/GitHub/BOG005-MD-links/__mocks__/mock-pruebas';
    const getMdFilesFunction = getMdFiles(secondTestRoute);
    const expectedResult = [
      'C:\\Users\\Usuario\\Documents\\GitHub\\BOG005-MD-links\\__mocks__\\mock-pruebas\\mock-md-file-2.md', 'C:\\Users\\Usuario\\Documents\\GitHub\\BOG005-MD-links\\__mocks__\\mock-pruebas\\mock-md-file.md'
    ];
    

    expect(getMdFilesFunction).toStrictEqual(expectedResult);    
  });
});
