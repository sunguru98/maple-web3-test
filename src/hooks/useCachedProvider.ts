import { useWeb3React } from '@web3-react/core';
import { useEffect, useState } from 'react';
import { connectors } from '../connectors';

export const useCachedProvider = (): boolean => {
  const { activate, active } = useWeb3React();
  const [isFinished, setIsFinished] = useState<boolean>(false);

  useEffect(() => {
    (async function () {
      const isAuthorized = await connectors.injected.isAuthorized();
      if (isAuthorized)
        activate(connectors.injected, () => setIsFinished(true), false);
      else setIsFinished(true);
    })();
  }, [activate]);

  useEffect(() => {
    active && setIsFinished(true);
  }, [active]);

  return isFinished;
};
