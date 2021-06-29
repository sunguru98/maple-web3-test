import { useWeb3React } from '@web3-react/core';
import { useEffect } from 'react';
import { connectors } from '../connectors';

export const useChainListener = () => {
  const { activate, error, active } = useWeb3React();

  useEffect(() => {
    if (!error && !active) {
      const { ethereum } = window as any;

      const handleConnect = () => activate(connectors.injected);
      ethereum.on('connect', handleConnect);
      ethereum.on('chainChanged', handleConnect);
      ethereum.on('accountsChanged', handleConnect);
      ethereum.on('networkChanged', handleConnect);

      return () => {
        ethereum.removeListener('connect', handleConnect);
        ethereum.removeListener('chainChanged', handleConnect);
        ethereum.removeListener('accountsChanged', handleConnect);
        ethereum.removeListener('networkChanged', handleConnect);
      };
    }
  }, []);
};
