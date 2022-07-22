#!/usr/bin/env node
const program = require('commander');
const pkg = require('../package.json')

program
    .version(pkg.version)
    .command('key', 'Managr Api Key -- https://nomics.com')
    .command('check','Check Coin Price info')
    .parse(process.argv);
console.log("Hello from coindex");
