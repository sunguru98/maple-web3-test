export const RPC_URLS = {
  1: `https://mainnet.infura.io/v3/${process.env.REACT_APP_INFURA_ID}`,
  3: `https://ropsten.infura.io/v3/${process.env.REACT_APP_INFURA_ID}`,
  4: `https://rinkeby.infura.io/v3/${process.env.REACT_APP_INFURA_ID}`,
  5: `https://goerli.infura.io/v3/${process.env.REACT_APP_INFURA_ID}`,
  42: `https://kovan.infura.io/v3/${process.env.REACT_APP_INFURA_ID}`,
};

export const CHAIN_NAMES = {
  mainnet: 1,
  ropsten: 3,
  rinkeby: 4,
  goerli: 5,
  kovan: 42,
};

export const POLLING_INTERVAL = 5000;
