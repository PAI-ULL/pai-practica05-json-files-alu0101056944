/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Programación de Aplicaciones Interactivas
  *
  * @author F. de Sande
  * @since 9.Mar.2021
  * @desc Reading a text file
  *       
  * @see {@link https://eloquentjavascript.net/20_node.html}
  */

'use strict';

const {readFile} = require("fs");
readFile("input.txt", (error, buffer) => {
  if (error) throw error;
  console.log("The file contained", buffer.length, "bytes.",
              "The first byte is:", buffer[0]);
});
