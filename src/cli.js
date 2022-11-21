#!/usr/bin/env nodo // Se convierte el archivo JavaScript en un script de línea de comandos de NodeJS

const { mdLinks } = require('./index')
const { stats, statsAndValidate } = require('./stats')

const route = process.argv[2];
const argv = process.argv
/* console.log(argv, 9) */

// Hacer que el archivo de CLI de JavaScript sea ejecutable
const cli = (route, argv) => {
    if (route && argv.includes('--stats') && argv.includes('--validate')) {
        mdLinks(route, { validate: true }).then((res) => { console.log('stats and validate', statsAndValidate(res)) })
    } else if (route && argv.includes('--validate')) {
        mdLinks(route, { validate: true }).then((res) => { console.log('validate true', res) })
    } else if (route && argv.includes('--stats')) {
        mdLinks(route, { validate: true }).then((res) => { console.log('stats true', stats(res)) })
    } else if (route && argv[3] == undefined) {
        mdLinks(route, { validate: false }).then((res) => { console.log('validate false', res) })
    }  

    if (argv[3] !== '--stats' && argv[3] !== '--validate' && argv[3] !== undefined) {
        console.log('Tiene una opcion inválida, intente con --validate o --stats')
    } else if (argv[4] !== '--stats' && argv[4] !== '--validate' && argv[4] !== undefined) {
        console.log('Tiene una opcion inválida, intente con --validate o --stats')
    }
}

cli(route, argv)