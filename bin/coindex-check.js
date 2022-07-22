const program = require('commander');
const check = require('../commands/checks');
program
     .command('price')
     .description('Check Price of coin')
     .option('--coin <type>','Add specific coin types in in CSV format'
     ,'BTC,ETH,MATIC')
     .option('--cur <currnecy>','Change the currency','USD' )
     .action(cmd=>check.price(cmd));

program.parse(process.argv)     