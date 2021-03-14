# Práctica 5. JSON. Ficheros de texto en JavaScript
### Factor de ponderación: 7

### Objetivos
Los objetivos de esta práctica son:
  
* Conocer el formato JSON y las herramientas de JS que permiten su tratamiento
* Trabajar con arrays y los métodos correspondientes a este tipo de objetos
* Ser capaz de procesar ficheros de texto en JavaScript
* Practicar la documentación de programas usando JSDoc
* Practicar el uso de ESLint para garantizar la coherencia del estilo del código desarrollado

### Rúbrica de evaluacion del ejercicio
Se señalan a continuación los aspectos más relevantes (la lista no es exhaustiva)
que se tendrán en cuenta a la hora de evaluar esta práctica:

* El comportamiento del programa debe ajustarse a lo solicitado en este enunciado.
* Deben usarse estructuras de datos adecuadas para representar los diferentes elementos que intervienen en el problema.
* Capacidad del programador(a) de introducir cambios en el programa desarrollado.
* Se comprobará que el código que el alumnado escribe se adhiere a las reglas de la Guía de Estilo.
* El código ha de estar documentado con [JSDoc](https://jsdoc.app/). 
  Haga que la documentación del programa generada con JSDoc esté disponible a través de una web alojada en su máquina IaaS de la asignatura.
* El alumnado ha de acreditar su capacidad para configurar y ejecutar 

### Indicaciones de caracter general
A la hora de resolver los problemas que se le proponen, trate de usar exclusivamente las características de
JavaScript que ha estudiado en clase o bien en el material que se le ha pedido que estudie.

Descarte soluciones avanzadas y nunca utilice código que no sea Ud. capaz de comprender y explicar a otra
persona.

### Lectura/Escritura de ficheros de texto en JavaScript
En el directorio raíz de este proyecto dispone de los ficheros
`read-file-lines.js` y `read-file.js`
que pueden servirle de punto de partida para estudiar por su cuenta cómo leer y escribir ficheros de texto en JavaScript

Desarrolle un programa my_wc.js que se comporte como el comando `wc` (word count) de Unix, es decir, que tome como parámetro por línea 
de comandos el nombre de un fichero de texto e imprima en pantalla el número de líneas, palabras y caracteres (bytes) que contiene el fichero.

Compruebe el correcto funcionamiento de su programa con diferentes ficheros de texto comprobando que su programa funcione exactamente igual que wc.

### Tratamiento de Datos. Formato JSON.
Comience por estudiar el capítulo 10 
[Modules](https://eloquentjavascript.net/10_modules.html) de Eloquent JavaScript y
el 
[correspondiente apartado](https://javascript.info/modules)
del Modern JS Tutorial.

Estudie a continuación el tutorial
[Read/Write JSON Files with Node.js](https://medium.com/@osiolabs/read-write-json-files-with-node-js-92d03cc82824).

En [este repositorio](https://github.com/samayo/country-json) se encuentran disponibles diversos datos en
formato JSON que contienen información relativa a diferentes países: sus nombres, capitales, moneda, religión,
población, etc.

Utilice el [visualizador on-line de JSON](http://jsonviewer.stack.hu/) para una primera toma de contacto con
esos datos.

**1.-** Comience por escribir diferentes módulos (ficheros `.js`; se propone usar módulos en formato CommonJS), 
uno para cada tipología de datos, en los que se incluyan en
forma de variables (ha de elegir el tipo de variable a utilizar) la información por países correspondiente a un determinado aspecto (idioma, religión, etc.)
de cada país.
Así por ejemplo el módulo `country-population.js` debería contener una entidad (variable, constante, objeto, ...) que almacenara los datos de población de cada uno de los países.
Ese módulo debería 
[exportar](https://javascript.info/import-export#export-before-declarations)
esa variable para hacerla disponible a otros programas JavaScript.

La forma más simple de leer un fichero JSON es usar `require`.
Invocando `require()` con la ruta a un archivo JSON se leerán y analizarán los datos de forma síncrona en un objeto JavaScript:
```js
const paises = require('./paises.json')
```

**2.-** Desarrolle a continuación un programa `combine-country-data.js`que permita combinar en un único fichero `country-data.json` un conjunto de métricas
para todos los países considerados.
Haga que ese fichero `country-data.json` contenga al menos la siguiente información para cada uno de los
países:

1. Nombre
2. Abreviatura del nombre
3. Altura promedio de los varones (Avg Male Height)
4. Capital de cada país
5. Continente
6. Moneda
7. Código de la moneda
8. Religión
9. Altura
10. Esperanza de vida
11. Número de habitantes
12. Densidad de Población
13. Superficie
14. Temperatura promedio

Utilice nuevamente el 
[visualizador on-line de JSON](http://jsonviewer.stack.hu/) 
para mostrar el contenido del fichero JSON que ha creado.

**3.-** Desarrolle como siguiente paso un programa `contry-stats.js` que utilice los datos que ha agregado para
imprimir en pantalla la información que da respuesta a las siguientes cuestiones:

1. El país más poblado del mundo es P1 (X habitantes) y el menos poblado es P2 (Y habitantes).
2. El país con mayor densidad de población en América es P3.
3. Los 3 países con mayor esperanza de vida en cada uno de los continentes son: ...
4. La media de la altura promedio de los varones en cada uno de los continentes es: 
5. Los porcentajes correspondientes (en función del número de países con cada religión) a las 5 religiones más
  extendidas en el mundo son:
6. Los países con más bajas temperaturas en cada uno de los continentes son los siguientes:

El programa `country-stats.js` debería imprimir en pantalla, como única salida, frases como las que figuran en los puntos
anteriores, con los datos correspondientes a cada caso.
Así la primera línea debiera ser algo similar a (datos figurados):

`El país más poblado del mundo es China (1409517397 habitantes) y el menos poblado es Andorra (76965 habitantes)`. 
