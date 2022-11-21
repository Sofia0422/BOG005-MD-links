
const arrayPrueba = [
    {
        href: 'https://firebase.google.com/docs//web/setup*',
        text: 'Firebase',
        file: 'C:\\Users\\Usuario\\Documents\\GitHub\\BOG005-MD-links\\src\\Pruebas\\subpruebas\\otromal.md',
        status: 404,
        ok: 'FAIL'
    },    
    {
        href: 'https://www.lonelyplanet.com/bulgaria/sofia',
        text: 'Sofia',
        file: 'C:\\Users\\Usuario\\Documents\\GitHub\\BOG005-MD-links\\src\\Pruebas\\Inside\\sofia.md',
        status: 200,
        ok: 'OK'
    },
    {
        href: 'https://firebase.google.com/docs//web/setup*',
        text: 'Firebase',
        file: 'C:\\Users\\Usuario\\Documents\\GitHub\\BOG005-MD-links\\src\\Pruebas\\mal.md',
        status: 404,
        ok: 'FAIL'
    },
    {
        href: 'https://portalpagos.claro.com.co/index.php?view=vistas/personal/claro/newclaro/inicio.php&id_objeto=#no-back-button',
        text: 'Portal Claro',
        file: 'C:\\Users\\Usuario\\Documents\\GitHub\\BOG005-MD-links\\src\\Pruebas\\Inside\\mark.md',
        status: 500,
        ok: 'FAIL'
    }
]

const stats = (arrayPrueba) => {
    /* console.log('Contenido arrayPrueba', arrayPrueba, 26) */
    total = {
        'Total': arrayPrueba.length,
        'Unique': new Set(arrayPrueba.map((element) => element.href)).size
    }
    /* console.log(total, 31) */
    return total
}

const statsAndValidate = (arrayPrueba) => {
    /* console.log('Contenido arrayPrueba', arrayPrueba, 36) */ 
    const broken = arrayPrueba.filter((links) => links.ok === 'FAIL').length;
    total = {
        'Total': arrayPrueba.length,
        'Unique': new Set(arrayPrueba.map((element) => element.href)).size,
        'Broken': broken
    }
    /* console.log(total, 43)  */
    return total
}

stats(arrayPrueba);
statsAndValidate(arrayPrueba);  

module.exports = {
    stats,
    statsAndValidate
};