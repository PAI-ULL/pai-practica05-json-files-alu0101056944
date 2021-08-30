/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Programación de Aplicaciones Interactivas
  *
  * @author Marcos Barrios
  * @since 29.august.2021
  * @desc Read input passed on command line.
  * @module TerminalInput
  */
'use strict';

/**
 * Used for data validation of numbers.
 * @private
 * @param {Number} number Number to be validated.
 * @return {boolean} false If number is either NaN or Infinity, true otherwise.
 */
function isValidNumber(number) {
  return !isNaN(number) && number !== Infinity;
}

/**
 * Make sure index isn't negative or outside the allowed range
 *    [0, process.argv.length], then use it to access the input value.
 * @summary Get input value from terminal.
 * @param {number} index Index position of the input word.
 * @return {string} Obtain a string word that belongs to the given executable's
 *    command-line options.
 */
function getProcessInput(index) {
  if (!isValidNumber(index) || index < 0 || index > process.argv.length - 1) {
    throw new Error('Bad index passed, can\t get process\'s input values.');
  }
  return process.argv[index];
}

module.exports = getProcessInput;
