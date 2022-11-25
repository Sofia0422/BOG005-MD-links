const { isPathAbsolute, isPathExist } = require('../src/path');

// Test para conversión de ruta relativa en absoluta

describe('Probando isPathExist', () => {
  it('Deberia ser una función', () => {
    expect(typeof isPathExist).toBe('function');
  });

  it('Debe determinar que existe la ruta de prueba', () => {
    const existingRoute = 'C:/Users/Usuario/Documents/GitHub/BOG005-MD-links/src/test';
    const isPathExistFunction = isPathExist(existingRoute);
    const expectedResult = console.log('La ruta existe. Puede continuar');

    expect(isPathExistFunction).toBe(expectedResult);
  })

describe('Probando isPathAbsolute', () => {
  it('Deberia ser una función', () => {
    expect(typeof isPathAbsolute).toBe('function');
  })
  it('Debería convertir la ruta relativa en absoluta', () => {
    let relativeRoute = './__mocks__/mock-pruebas';
    let absoluteRoute = 'C:\\Users\\Usuario\\Documents\\GitHub\\BOG005-MD-links\\__mocks__\\mock-pruebas';

    let realResult = isPathAbsolute(relativeRoute);

    expect(realResult).toBe(absoluteRoute);
  });
})});
