#!/usr/bin/env node

const { Command } = require('commander');
const main = require('./lib/main');
const { version } = require('./lib/version');

const program = new Command();

program
  .version(version)
  .usage('[options] <file ...>')
  .option('-g, --go', 'Go')
  .parse(process.argv);

const options = program.opts();

if (options.go) {
  main.go();
}
