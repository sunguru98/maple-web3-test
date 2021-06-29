import { useWeb3React } from '@web3-react/core';
import { NavBar } from './components/NavBar';
import { Alert } from 'antd';
import { getErrorMessage } from '.';
import { useAccountBalance } from './hooks/useAccountBalance';
import { useEffect } from 'react';

function App() {
  const { active, error } = useWeb3React();

  const { balance, getBalance } = useAccountBalance();

  return (
    <div className='App'>
      <NavBar />
      {active && error && (
        <Alert
          message='Error'
          description={getErrorMessage(error)}
          type='error'
          showIcon
        />
      )}
    </div>
  );
}

export default App;
