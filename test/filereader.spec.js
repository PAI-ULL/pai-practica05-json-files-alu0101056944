/**
 * PAI ULL
 * @author Marcos Barrios
 * @since 29.august.2021
 * @desc Testing file reader example functions.
 */

'use strict';

/* eslint-disable */
const Mocha = require('mocha');
const expect = require('chai').expect;

const {readFile} = require('../src/examples/filereader.js');

describe('#readfile', () => {
  it('Works with one line files', () => {
    expect(readFile('resources/oneline.txt')).to.equal('Una linea.');
  });

  it('Works with files that only have one character', () => {
    expect(readFile('resources/onlyonechar.txt')).to.equal(' ');
  })

  it('Works with empty files ', () => {
    expect(readFile('resources/empty.txt')).to.equal('');
  })
});
