require('babel-register')
var HDWalletProvider = require("truffle-hdwallet-provider");

var infura_apikey = "XXXXXXXXXXXXXXXXXXXXXX";
var mnemonic = "XXXXXXXXXXXXXXXXXXXXXX";

module.exports = {
  networks: {
    development: {
      host: 'localhost',
      port: 8545,
      network_id: '*' // Match any network id
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/"+infura_apikey)
      },
      network_id: 3,
      gas: 4500000,
      gasPrice: 25000000000
    },
    rinkeby: {
      provider: new HDWalletProvider(mnemonic, 'https://rinkeby.infura.io/'+infura_apikey),
      network_id: 4,
      gas: 4500000,
      gasPrice: 25000000000
    }
  }
}

