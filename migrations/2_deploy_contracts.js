var Calculator = artifacts.require("./Calculator.sol");

module.exports = function(deployer) {
  // deployer.deploy(Calculator);
  // Constructor args
  deployer.deploy(Calculator, 5);
};
