
const { getMdFiles } = require('../src/readDir');

describe('getMdFiles function', () => {

  it('Should be a function', () => {
    expect(typeof getMdFiles).toBe('function');
  });

  it('Should return all mdFiles from mock directory', () => {
    const secondTestRoute = 'C:/Users/Usuario/Documents/GitHub/BOG005-MD-links/__mocks__/mock-directory';
    const getMdFilesFunction = getMdFiles(secondTestRoute);
    const expectedResult = [
      'C:\\Users\\Usuario\\Documents\\GitHub\\BOG005-MD-links\\__mocks__\\mock-directory\\mock-md-file-2.md', 'C:\\Users\\Usuario\\Documents\\GitHub\\BOG005-MD-links\\__mocks__\\mock-directory\\mock-md-file.md'
    ];
    

    expect(getMdFilesFunction).toStrictEqual(expectedResult);    
  });
});
