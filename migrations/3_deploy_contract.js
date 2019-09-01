var CrowdFundingWithDeadline = artifacts.require("./CrowdFundingWithDeadline.sol");

module.exports = function(deployer) {
  deployer.deploy(
    CrowdFundingWithDeadline,
    "Test campaign",
    1,
    20,
    "0x6Ea84Db5B189036Cb2AF66afF9B7Ea9b3B251717"
  );
};
