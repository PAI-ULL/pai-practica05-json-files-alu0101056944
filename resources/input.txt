# Práctica 2. Programas Simples (II). Exercism
### Factor de ponderación: 5

### Objetivos
Los objetivos de esta práctica son:
  
* Ser capaz de realizar programas simples en JavaScript
* Conocer y saber utilizar la plataforma Exercism
* Conocer y poner en prácticas las recomendaciones de la Guía de Estilo de Google para JavaScript

### Rúbrica de evaluacion del ejercicio
Se señalan a continuación los aspectos más relevantes (la lista no es exhaustiva)
que se tendrán en cuenta a la hora de evaluar esta práctica:
* El alumnado ha de acreditar que es capaz de desarrollar y ejecutar programas de la plataforma Exercism
* El alumnado debe ser capaz de subir la solución a un problema de Exercism a esa plataforma
* Se comprobará que el código que el alumnado escribe se adhiere a las reglas de la Guía de Estilo que se
  usará en la asignatura

### Indicaciones de caracter general
A la hora de resolver los problemas que se le proponen, trate de usar exclusivamente las características de
JavaScript que ha estudiado en clase o bien en el material que se le ha pedido que estudie.

Descarte soluciones avanzadas y nunca utilice código que no sea Ud. capaz de comprender y explicar a otra
persona.

Los programas que escriba han de seguir **fielmente** todas las indicaciones de la 
[Guía de estilo de Google para JavaScript](https://google.github.io/styleguide/jsguide.html).
Estudie esa guía omitiendo todo lo que se refiera a características avanzadas del lenguaje que no haya Ud.
estudiado aún.
Preste particular atención a los siguientes aspectos:
* Reglas para nombres (identificadores) de diferente tipología (constantes, variables, parámetros, funciones, ...)
* [Formateo](https://google.github.io/styleguide/jsguide.html#formatting) del código
* Utilización de los
  [espacios en blanco](https://google.github.io/styleguide/jsguide.html#formatting-horizontal-whitespace)
* Comentarios de ["cabecera"](https://google.github.io/styleguide/jsguide.html#jsdoc-top-file-level-comments) para sus programas. 
  Para este aspecto se recomienda utilizar una "plantilla" base de comentarios que incluya información tal
  como: Universidad, Titulación, Asignatura, Proyecto, Autor, Fecha, ... que irá siempre seguido de una
  descripción más o menos exhaustiva del programa en cuestión
Esa guía de estilo es la que se utilizará en la asignatura y la conformidad de todos los programas presentados como prácticas es un requisito en la evaluación de los mismos.

### Prime Factors
Localice en el track de JavaScript de Exercism el problema 
[*Prime Factors*](https://exercism.io/my/solutions/fce10654772240b3b22955cd5aeb855a)
y descárguelo en su máquina virtual. 
Resuelva ese problema. 

La función que ha de escribir es una *arrow function* que tendría la siguiente *signature*:

```js
export const primeFactors = () => {
};
```
que tendrá como parámetro un número entero y ha de devolver un array que contenga todos los factores primos del número pasado como parámetro.

Estudie
[este tutorial](https://javascript.info/array)
para conocer los fundamentos necesarios para trabajar con arrays en JavaScript. 

Ejecute los tests que acompañan al problema para comprobar que todos pasan correctamente y cuando lo consiga, suba su solución a Exercism.

Una vez que suba su solución a la plataforma, revise la solución que hayan subido otros usuarios y compárelas
con la suya.

Una vez que su programa funcione en consola, consiga que funcione en una página web similar a la que se ha usado para el cálculo de Pi. 

### Strain
Localice en el track de JavaScript de Exercism el problema 
[*Strain*](https://exercism.io/my/solutions/03d029e7331642fd8a15501eb1ae64bf)
y descárguelo en su máquina virtual. 
Resuelva ese problema. 

Las funciones que ha de programar, *keep()* y *discard()* toman ambas dos parámetros, un array 
y una función booleana (un predicado) y devuelven un array que contiene (keep) o no (discard) 
los elementos del array de entrada para los que el predicado es cierto.

### Yacht
Localice en el track de JavaScript de Exercism el problema 
[*Yacht*](https://exercism.io/my/solutions/5f2e1e4332fd419abf2ea365b05b4e3b)
y descárguelo en su máquina virtual. Resuelva ese problema. 

Si analiza el programa que realiza los tests (`yacht.spec.js`) observará que la función *score()* ha de tener dos parámetros: 
un array con las puntuaciones de los lanzamientos de 5 dados y una cadena (string) con el nombre de la jugada y ha de devolver 
la puntuación correspondiente a esa jugada.
