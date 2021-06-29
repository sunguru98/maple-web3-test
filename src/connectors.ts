import { InjectedConnector } from '@web3-react/injected-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import { POLLING_INTERVAL, RPC_URLS } from './constants';

export const connectors = {
  injected: new InjectedConnector({
    supportedChainIds: [1, 3, 4, 5, 42],
  }),
  walletConnect: new WalletConnectConnector({
    rpc: {
      1: RPC_URLS[1],
      3: RPC_URLS[3],
      4: RPC_URLS[4],
      5: RPC_URLS[5],
      42: RPC_URLS[42],
    },
    pollingInterval: POLLING_INTERVAL,
    qrcode: true,
  }),
};
