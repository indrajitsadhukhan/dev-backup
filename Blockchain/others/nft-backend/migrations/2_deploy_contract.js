const MyContract = artifacts.require("MyContract");
const NFT = artifacts.require("NFT");

module.exports = function(deployer) {
  deployer.deploy(MyContract);
  deployer.deploy(NFT);
};
