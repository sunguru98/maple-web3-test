import { CSSProperties } from 'react';
import { useAccountBalance } from '../../hooks/useAccountBalance';
import { cardStyles } from '../Banner';

import { Typography, Form, Input, Button } from 'antd';
import { formatEther, isAddress } from 'ethers/lib/utils';

const walletStyles: CSSProperties = {
  ...cardStyles,
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: '5rem',
};

export const Wallet = () => {
  const { balance, getBalance, isFetching, customAccountBalance } =
    useAccountBalance();

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const address = e.target.value;
    if (address.length > 0 && !isAddress(address)) {
      alert('Please enter a valid address');
    }
    return;
  };

  const checkBalance = async (values: { address: string }) => {
    await getBalance(values.address);
  };

  return (
    <div style={walletStyles}>
      {!balance ? (
        <Typography.Title level={2}>
          Fetching Connected Account Balance ...
        </Typography.Title>
      ) : (
        <div>
          <Typography.Title level={2}>
            Connected account balance
          </Typography.Title>
          <Typography.Title level={3} style={{ margin: 0 }}>
            {formatEther(balance)} ETH
          </Typography.Title>
        </div>
      )}
      <Form
        layout='inline'
        name='accountBalance'
        initialValues={{ address: '' }}
        style={{ fontSize: '1.8rem', marginTop: '2rem', width: '100%' }}
        wrapperCol={{ span: 16 }}
        onFinish={checkBalance}
      >
        <Form.Item
          wrapperCol={{ span: 16 }}
          label='Custom Address'
          name='address'
          rules={[
            { required: true, message: 'An account address is required' },
          ]}
          style={{ width: '100%' }}
        >
          <Input onBlur={handleBlur} size='large' placeholder='0x12dskfj....' />
        </Form.Item>

        <Form.Item
          wrapperCol={{ span: 16, offset: 18 }}
          style={{ width: '100%', marginTop: '1rem' }}
        >
          <Button type='primary' htmlType='submit' loading={isFetching}>
            Submit
          </Button>
        </Form.Item>
      </Form>
      {customAccountBalance && (
        <Typography.Title level={4}>
          Balance: {formatEther(customAccountBalance)} ETH
        </Typography.Title>
      )}
    </div>
  );
};
