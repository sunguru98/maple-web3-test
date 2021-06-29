import { useWeb3React } from '@web3-react/core';
import { NavBar } from './components/NavBar';
import { Alert } from 'antd';
import { getErrorMessage } from './index';
import { Banner } from './components/Banner';
import { useCachedProvider } from './hooks/useCachedProvider';
import { Wallet } from './components/Wallet';

function App() {
  useCachedProvider();
  const { active, error } = useWeb3React();

  return (
    <div className='App'>
      <NavBar />
      {error && (
        <Alert
          message='Error'
          description={getErrorMessage(error)}
          type='error'
          showIcon
          closable
        />
      )}
      <Banner />
      {active && <Wallet />}
    </div>
  );
}

export default App;
