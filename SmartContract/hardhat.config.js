require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: "/Users/maharajababu/Documents/Projects/EthIndia2k23/SmartContract/.env" });
/** @type import('hardhat/config').HardhatUserConfig */

const PRIVATE_KEY = "d2ab6e77539c6d2ba90f19b217e26e4fad301e5066445514b4b63cba0fc80b6c"; 

module.exports = {
  solidity: "0.8.20",
  settings: {
    evmVersion: "shanghai",
    optimizer: {
      enabled: true,
      runs: 200
    }
  },
  networks: {
    
    'base-testnet': {
      url: 'https://base-goerli.public.blastapi.io',
      accounts: [PRIVATE_KEY],
    },

    'mantle-testnet': {
      url: 'https://rpc.testnet.mantle.xyz',
      accounts: [PRIVATE_KEY],
    },

    'scroll-testnet': {
      url: 'https://sepolia-rpc.scroll.io/',
      accounts: [PRIVATE_KEY],
    },

    'arbitrum-stylus': {
      url: 'https://stylus-testnet.arbitrum.io/rpc',
      accounts: [PRIVATE_KEY],
    },

    "celo-alfajores": {
      url: "https://alfajores-forno.celo-testnet.org",
      accounts: [PRIVATE_KEY],
    },

    "arbitrumGoerli": {
      url: 'https://goerli-rollup.arbitrum.io/rpc',
      chainId: 421613,
      accounts: [PRIVATE_KEY],
    },

  },

  etherscan: {
    apiKey: {
      "base-testnet": "abc",
      "mantle-testnet": "YourKEY",
      "scroll-testnet": "7U4ZHQMC6MPFCDA3QXGK3U1NUK5F5UD98Y",
      "arbitrum-stylus": "abcd",
      "celo-alfajores": "abcd",
      "arbitrumGoerli": "E7J3ZRQ4E89TQD9R52STY453UEE7G76GIU"
    },

    customChains: [
      {
        network: "base-testnet",
        chainId: 84531,
        urls: {
          apiURL: "https://api-goerli.basescan.org/api",
          browserURL: '',
        },
      },

      {
        network: "mantle-testnet",
        chainId: 5001,
        urls: {
          apiURL: "https://explorer.testnet.mantle.xyz/api",
          browserURL: '',
        },
      },

      {
        network: "scroll-testnet",
        chainId: 534351,
        urls: {
          apiURL: "https://api-sepolia.scrollscan.com/api",
          browserURL: 'https://sepolia.scrollscan.com',
        },
      },

      {
        network: "arbitrum-stylus",
        chainId: 23011913,
        urls: {
          apiURL: "https://stylus-testnet-explorer.arbitrum.io/api",
          browserURL: '',
        },
      },

      {
        network: "celo-alfajores",
        chainId: 44787,
        urls: {
            apiURL: "https://api-alfajores.celoscan.io/api",
            browserURL: "https://alfajores.celoscan.io",
        },
      },

      {
        network: "arbitrumGoerli",
        chainId: 421613,
        urls: {
            apiURL: "https://api-goerli.arbiscan.io/api",
            browserURL: "https://api-goerli.arbiscan.io/api",
        },
      },

    ],

  },
}