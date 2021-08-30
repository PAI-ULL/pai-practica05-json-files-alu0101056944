/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Programación de Aplicaciones Interactivas
  *
 * @author Marcos Barrios
 * @since 29.august.2021
 * @desc Read a file's content and obtain it as string.
 * @module FileHandling
 */
'use strict';

const fs = require('fs');

/**
 * Open a file and stop execution until a string with it's content
 * has been read. Make a sync read operation and directly output it.
 * @summary Obtain a file's content as string using sync methods.
 * @param {string} file String name of a file.
 * @throws {Error} when read failed.
 * @return {string} Content of the file as a string.
 */
function readFile(file) {
  try {
    return fs.readFileSync(file, 'utf8');
  } catch (error) {
    throw error;
  }
}

/**
 * Call fs's asynchronous stat function to obtain a Stat object and then
 * make a console log call with string information from it
 * @summary Log to the terminal important file info.
 * @param {string} filename Name of the file including extension.
 */
function logFileInfo(filename) {
  fs.stat(`${filename}`, (err, stat) => {
    if (err) {
      throw new Error(error);
    }
    const fileInfo = 'Is directory? ' + stat.isDirectory() +
        ' , UID: ' + stat.uid + ' ,GID: ' + stat.gid;
    console.log(fileInfo);
  });
}

/**
 * Call fs.rename() on the path with the newname and the old path, then log the
 * error.
 * @summary Rename a path (directory or file).
 * @param {string} path Path to the target.
 * @param {string} newname New name of the target.
 */
function rename(path, newname) {
  fs.rename(path, newname, (err) => {
    if (err) {
      throw new Error('Error renaming path' + err);
    }
    console.log('Rename of path ' + path + ' to ' + newname + ' completed.');
  });
}

/**
 * Call unlick from fs and pass it the path to delete. Won't work with
 * neither empty nor not empty directories.
 * @summary Delete a file.
 * @param {string} filepath Path to the file.
 */
function remove(filepath) {
  fs.unlink(filepath, (err) => {
    if (err) throw err;
    console.log(`${filepath} was successfully deleted`);
  });
}

/**
 * Use fs.readdir() to asynchronously console.log() the output array of
 * strings with the names of each file.
 * @summary Read a directory and output to terminal the names of each file
 *    in it.
 * @throws {Error} When the file doesn`t exist.
 * @param {string} dirname Absolute or relative path to the directory.
 */
function logDirFiles(dirname) {
  fs.readdir(`${dirname}`, (err, files) => {
    if (err) {
      throw new Error('An error occured while reading the directory: ' + err);
    }
    console.log(files);
  });
}

module.exports = {
  logDirFiles,
  readFile,
  logFileInfo,
  rename,
  remove,
};
