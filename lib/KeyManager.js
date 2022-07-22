const Configstore = require('configstore');
const pkg = require('../package.json');

class KeyManager {
    constructor() {
        this.conf = new Configstore(pkg.name);
    }

    setKey(key) {
        this.conf.set('apikey', key);
        return key;
    }

    getkey() {
        const key = this.conf.get('apikey');

        if (!key) {
            throw new Error('No Api key found - Get Api at https://nomics.com');
        }
        return key;
    }

    deleteKey() {
        const key = this.conf.get('apikey');

        if (!key) {
            throw new Error('No Api key found - Get Api at https://nomics.com');
        }
        this.conf.delete('apikey');
        return key;
    }
}

module.exports = KeyManager;