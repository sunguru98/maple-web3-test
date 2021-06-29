import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {
  NoEthereumProviderError,
  UserRejectedRequestError,
} from '@web3-react/injected-connector';
import { UnsupportedChainIdError, Web3ReactProvider } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';

import 'antd/dist/antd.css';
import './index.css';
import { POLLING_INTERVAL } from './constants';

export function getErrorMessage(error: Error): string {
  if (error instanceof NoEthereumProviderError) {
    return 'Please install MetaMask to continue.';
  }

  if (error instanceof UnsupportedChainIdError) {
    return 'Connected to a unsupported chain.';
  }

  if (error instanceof UserRejectedRequestError) {
    return 'Please authorize using your wallet.';
  }

  return 'An Unknown error has occured.';
}

function getLibrary(provider: any) {
  const library = new Web3Provider(provider);
  library.pollingInterval = POLLING_INTERVAL;
  return library;
}

ReactDOM.render(
  <React.StrictMode>
    <Web3ReactProvider getLibrary={getLibrary}>
      <App />
    </Web3ReactProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
