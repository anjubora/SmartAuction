const SmartAuction = artifacts.require("SmartAuction");

module.exports = function(deployer) {
  deployer.deploy(SmartAuction,Date.now()+24*60*60*60);
};
