const KeyManager = require('../lib/KeyManager');
const CryptoAPI = require('../lib/CryptoApi');

const check = {
    async price(cmd) {
        try {
            const keyManager = new KeyManager();
            const key = keyManager.getkey();
          // const key='baf4e3bb9a202fb45b33a2bcc8bb4c8d24d431e0'
            console.log(key);
            const api = new CryptoAPI(key);

            const priceOutputData = await api.getPriceData(cmd.coin, cmd.cur);

            console.log(priceOutputData);
        } catch (err) {
            console.log(err.message.red);
        }
    }
}

module.exports = check;