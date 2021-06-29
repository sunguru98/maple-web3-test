import { CSSProperties } from 'react';
import { Button, Typography } from 'antd';
import { RightCircleOutlined } from '@ant-design/icons';
import { RPC_URLS } from '../../constants';

const navBarStyles: CSSProperties = {
  width: '100vw',
  minHeight: '10vh',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '20px',
};

export const NavBar: React.FC = () => {
  return (
    <nav style={navBarStyles}>
      <Typography.Title level={3}>Simple Wallet</Typography.Title>
      <div>
        <Button
          size='large'
          type='primary'
          style={{
            fontWeight: 'bold',
            marginRight: '20px',
          }}
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
        >
          Connect to Metamask
        </Button>
      </div>
    </nav>
  );
};
