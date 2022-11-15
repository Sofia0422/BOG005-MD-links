const { isPathAbsolute, isPathExist } = require('../src/path');

// Test para conversión de ruta relativa en absoluta

describe('Testing isPathExist', () => {
  it('Should be a function', () => {
    expect(typeof isPathExist).toBe('function');
  });
});

describe('Testing isPathAbsolute', () => {
  it('Should be a function', () => {
    expect(typeof isPathAbsolute).toBe('function');
  });
});

describe('Testing isPathAbsolute', () => {
  it('Should convert relative route into absolute', () => {
    const relativeRoute = './__mocks__/mock-directory';
    const absoluteRoute = 'C:\\Users\\Usuario\\Documents\\GitHub\\BOG005-MD-links\\__mocks__\\mock-directory';
    const realResult = isPathAbsolute(relativeRoute);

    expect(realResult).toBe(absoluteRoute);
  });
});
