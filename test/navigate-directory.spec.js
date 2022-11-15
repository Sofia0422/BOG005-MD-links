const path = require('path');
const { isDirectory } = require('../src/readDir');

describe('isDirectory function', () => {
  it('Should be a function', () => {
    expect(typeof isDirectory).toBe('function');
  });

  it('Should throw true for a directory', () => {
    const testRoute = path.resolve(__dirname, '../__mocks__/mock-directory');
    /* console.log(testRoute); */
    const isDirectoryFunction = isDirectory(testRoute);
    expect(isDirectoryFunction).toBeTruthy();
  });
});
