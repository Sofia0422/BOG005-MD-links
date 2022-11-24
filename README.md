# Markdown Links

***

## 1. Generalidades

[Markdown](https://es.wikipedia.org/wiki/Markdown) es un lenguaje de marcado
ligero muy popular entre developers. Es usado en muchísimas plataformas que
manejan texto plano (GitHub, foros, blogs, ...) y es muy común
encontrar varios archivos en ese formato en cualquier tipo de repositorio
(empezando por el tradicional `README.md`).

Estos archivos `Markdown` normalmente contienen _links_ (vínculos/ligas) que
muchas veces están rotos o ya no son válidos y eso perjudica mucho el valor de
la información que se quiere compartir.

![md-links](https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg)

## 2. Diagramas de Flujo

Con el fin de visualizar mejor las actividades a realizar y planificar las tareas y objetivos, fueron elaborados 2 diagramas de flujo.

### 2.1. Diagrama de Flujo - Ruta

![Alt](/img/Diagramas%20de%20flujo-%20Ruta%202.0.png)

### 2.2. Diagrama de Flujo - Options

![Alt](/img/Diagrama%20de%20Flujo%20-%20Options%202.0.png)


## 3. Consideraciones técnicas

Esta librería recibe tanto rutas absolutas como rutas relativas que pueden contener o no archivos markdown. Una vez identificados estos archivos se procede a extraer los links y verificar si están rotos o no. También muestra una estadística respecto a todos los links encontrados, como el numero de links totales, links únicos (que no se encuentran repetidos en otro(s) archivo(s)) y los links que están rotos.

El valor de entrada puede ser una ruta absoluta **"C:\Users\Usuario\Documents\GitHub\BOG005-MD-links\src\Pruebas"** o una ruta relativa **"src\Pruebas"** 

### 3.1. Instalación

```sh
npm install isofiabustosa-md-links
```

### a) JavaScript API

El módulo se puede **importar** en otros scripts de Node.js:

```js
const mdLinks = require("isofiabustosa-md-links");

mdLinks("./some/example.md")
  .then(links => {
    // => [{ href, text, file }, ...]
  })
  .catch(console.error);

mdLinks("./some/example.md", { validate: true })
  .then(links => {
    // => [{ href, text, file, status, ok }, ...]
  })
  .catch(console.error);

mdLinks("./some/dir")
  .then(links => {
    // => [{ href, text, file }, ...]
  })
  .catch(console.error);
```

### b) CLI (Command Line Interface - Interfaz de Línea de Comando)

En la **terminal** puede ejecutar las siguientes Lineas de Comando, de acuerdo a la información que requiera sobre su archivo markdown:

`md-links <path-to-file> [options]`

Por ejemplo:
Si solo se pasa la ruta, se muestra la ruta absoluta, el link y el texto

```sh
$ md-links ./some/example.md
./some/example.md http://algo.com/2/3/ Link a algo
./some/example.md https://otra-cosa.net/algun-doc.html algún doc
./some/example.md http://google.com/ Google
```

#### Options

##### `--validate`

Si se pasa la opción `--validate`, se muestra de cada link la ruta absoluta, el link, el código de status, si el link está roto('Fail') o está bien('OK') y el texto.

Por ejemplo:

```sh
$ md-links ./some/example.md --validate
./some/example.md http://algo.com/2/3/ ok 200 Link a algo
./some/example.md https://otra-cosa.net/algun-doc.html fail 404 algún doc
./some/example.md http://google.com/ ok 301 Google
```

##### `--stats`

Si se pasa la opción `--stats` el resultado serán datos estadísticos con los links totales y únicos

Por ejemplo:

```sh
$ md-links ./some/example.md --stats
Total: 3
Unique: 3
```

También se puede combinar `--stats` y `--validate` para obtener estadísticas que
necesiten de los resultados de la validación.

```sh
$ md-links ./some/example.md --stats --validate
Total: 3
Unique: 3
Broken: 1
```

