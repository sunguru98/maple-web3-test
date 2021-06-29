import { useWeb3React } from '@web3-react/core';
import { useEffect, useState } from 'react';
import { BigNumber } from 'ethers';

export const useAccountBalance = () => {
  const { library, active, account } = useWeb3React();
  const [balance, setBalance] = useState<BigNumber>(BigNumber.from(0));

  useEffect(() => {
    if (active && account) {
      library?.getBalance(account).then(setBalance);
    }
  }, [account, active, library]);

  async function getBalance(account: string) {
    return library ? library.getBalance(account) : null;
  }

  return {
    balance,
    getBalance,
  };
};
