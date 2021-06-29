import { CSSProperties } from 'react';
import { Button, Typography } from 'antd';
import { RightCircleOutlined } from '@ant-design/icons';
import { useWeb3React } from '@web3-react/core';
import { connectors } from '../../connectors';

const navBarStyles: CSSProperties = {
  width: '100vw',
  minHeight: '10vh',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '20px',
};

const badgeStyles: CSSProperties = {
  minWidth: '15rem',
  padding: '10px 15px',
  textAlign: 'center',
  background: '#1891FF',
  color: 'white',
  fontSize: '1rem',
  fontWeight: 'bold',
  borderRadius: '1rem',
  marginRight: '10px',
};

function shortenHash(hash: string) {
  const len = hash.length;
  return `${hash.substr(0, 6)}...${hash.substr(
    len - 4,
    len - 1
  )}`.toUpperCase();
}

export const NavBar: React.FC = () => {
  const { activate, account, deactivate } = useWeb3React();

  return (
    <nav style={navBarStyles}>
      <Typography.Title level={3}>Simple Wallet</Typography.Title>
      {account ? (
        <div>
          <span style={badgeStyles}>Connected to {shortenHash(account)}</span>
          <Button
            size='large'
            type='primary'
            danger
            style={{
              fontWeight: 'bold',
              marginRight: '20px',
            }}
            onClick={deactivate}
          >
            Disconnect
          </Button>
        </div>
      ) : (
        <div>
          <Button
            size='large'
            type='primary'
            style={{
              fontWeight: 'bold',
              marginRight: '20px',
            }}
            onClick={() => activate(connectors.walletConnect)}
          >
            Connect to WalletConnect
          </Button>
          <Button
            size='large'
            type='primary'
            style={{
              background: 'orange',
              borderColor: 'orange',
              fontWeight: 'bold',
            }}
            icon={<RightCircleOutlined />}
            onClick={() => activate(connectors.injected)}
          >
            Connect to Metamask
          </Button>
        </div>
      )}
    </nav>
  );
};
