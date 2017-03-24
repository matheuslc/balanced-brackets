"use strict";

const yargs = require('yargs').argv;
const balance = require('./index');

console.log(balance(yargs.string));