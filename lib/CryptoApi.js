const axios = require('axios');
const colors = require('colors');

class CryptoAPI {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseUrl = 'https://api.nomics.com/v1/currencies/ticker';
     
    }

    async getPriceData(coinOption, curOption) {
        try {
            const res = await axios.get(`${this.baseUrl}?key=${this.apiKey}&ids=${coinOption}&
         converts=${curOption}`);
         
         let output=' ';
         
         res.data.forEach(coin => {
            output+=`Coin : ${coin.symbol.yellow} (${coin.name}) | Price: ${coin.price.green}
            | Rank : ${coin.rank.blue}\n`;
         });
          return output;
        }catch(err){
            console.log(err);
        }
    }
}

module.exports=CryptoAPI;