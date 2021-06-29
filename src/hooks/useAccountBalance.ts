import { useWeb3React } from '@web3-react/core';
import { useEffect, useState } from 'react';
import { BigNumber } from 'ethers';

export const useAccountBalance = () => {
  const { library, active, account } = useWeb3React();
  const [balance, setBalance] = useState<BigNumber | null>(null);
  const [customAccountBalance, setCustomAccountBalance] =
    useState<BigNumber | null>(null);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    if (active && account) {
      library?.getBalance(account).then(setBalance);
    }
  }, [account, active, library]);

  async function getBalance(account: string) {
    try {
      setIsFetching(true);
      setCustomAccountBalance(null);
      const balance = await library.getBalance(account);
      setCustomAccountBalance(balance);
    } catch (err) {
      return null;
    } finally {
      setIsFetching(false);
    }
  }

  return {
    balance,
    customAccountBalance,
    getBalance,
    isFetching,
  };
};
