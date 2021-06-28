import { useContext, createContext, useState } from 'react';
import { providers } from 'ethers';

export type Web3ContextType = {
  account: null | string;
  ethersProvider: null | providers.JsonRpcProvider;
  isConnecting: boolean;
  chainId: number | null;
  connectWallet: () => void;
};

const Web3Context = createContext<Web3ContextType>({
  account: null,
  ethersProvider: null,
  isConnecting: true,
  chainId: null,
  connectWallet: () => {},
});

export const useWeb3 = () => useContext(Web3Context);

export const Web3ContextProvider: React.FC = ({ children }) => {
  const [walletData, setWalletData] = useState<
    Omit<Web3ContextType, 'connectWallet'>
  >({
    account: null,
    ethersProvider: null,
    isConnecting: true,
    chainId: null,
  });

  const connectWallet = async () => {};

  return (
    <Web3Context.Provider
      value={{
        ethersProvider: null,
        chainId: null,
        connectWallet,
        account: null,
        isConnecting: walletData.isConnecting,
      }}
    >
      {children}
    </Web3Context.Provider>
  );
};
