const inquirer = require('inquirer');
const colors = require('colors');
const KeyManager = require('../lib/KeyManager')
const { isRequired } = require('../utils/validation')
console.log(KeyManager);
const key = {
    async set() {
        const keyManager = new KeyManager();
        const input = await inquirer.prompt([
            {
                type: 'input',
                name: 'key',
                message: 'Enter API Key '.green + ' https://nomics.com',
                validate: isRequired
            }
        ]);
        const key = keyManager.setKey(input.key);

        if (key) {
            console.log('API key Set'.blue);
        }
    },
    show() {
        try {
            const keyManager = new KeyManager();
            const key = keyManager.getkey();

            console.log('Cuurent API key :', key.yellow);

            return key;
        } catch (err) {
            console.log(err.message.red);
        }
    },
    remove() {
        try {
            const keyManager = new KeyManager();
             keyManager.deleteKey();

            console.log('key removed'.blue);

            return key;
        } catch (err) {
            console.log(err.message.red);
        }
    }
}




module.exports = key;