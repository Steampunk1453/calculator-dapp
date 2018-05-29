require('babel-register')
var HDWalletProvider = require("truffle-hdwallet-provider");

var infura_apikey = "XXXXXXXXXXXXXXXXXXXXXX";
var mnemonic = "XXXXXXXXXXXXXXXXXXXXXX";
var address = "XXXXXXXXXXXXXXXXXXXXXX";

module.exports = {
  networks: {
    development: {
      host: 'localhost',
      port: 7545,
      network_id: '*' // Match any network id
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/"+infura_apikey)
      },
      network_id: 3,
      from: address,
      gas: 4700388
    },
    rinkeby: {
      provider: new HDWalletProvider(mnemonic, 'https://rinkeby.infura.io/'+infura_apikey),
      network_id: 4,
      gas: 4500000,
      gasPrice: 25000000000
    }
  }
}

