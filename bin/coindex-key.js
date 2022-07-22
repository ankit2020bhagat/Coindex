const program = require('commander');
const key = require('../commands/key');
program
    .command('set')
    .description('Set Api Key -- Get at https:// ')
    .action(key.set);

program
    .command('show')
    .description('show Api Key')
    .action(key.show);

program
    .command('remove')
    .description('remove Api key ')
    .action(key.remove);

program.parse(process.argv);    