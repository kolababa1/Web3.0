//https://eth-ropsten.alchemyapi.io/v2/5JfZjV2K6g1Z-6VabI-EOdFEa47cHo39

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/5JfZjV2K6g1Z-6VabI-EOdFEa47cHo39",
      accounts: [
        "d04831e80b02c3c8fe5c81406d4a89d60847c3e7bb42c4b172e108f494bb1f07",
      ],
    },
  },
};
