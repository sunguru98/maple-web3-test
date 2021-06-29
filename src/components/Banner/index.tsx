import { UnsupportedChainIdError, useWeb3React } from '@web3-react/core';
import { CSSProperties } from 'react';
import { CHAIN_NAMES, RPC_URLS } from '../../constants';

export const cardStyles: CSSProperties = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minHeight: '40vh',
  minWidth: '50vw',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '20px',
  boxShadow: '0 0 1rem rgba(0, 0, 0, .4)',
};

const bannerStyles: CSSProperties = {
  ...cardStyles,
  background: 'white',
  fontWeight: 'bold',
  fontSize: '2rem',
  flexDirection: 'column',
};

export const Banner = () => {
  const { active, error } = useWeb3React();

  if (error instanceof UnsupportedChainIdError) {
    return (
      <div style={bannerStyles}>
        Please connect to either of the following chains.
        <ul style={{ fontSize: '1.2rem' }}>
          {Object.keys(CHAIN_NAMES).map((k) => (
            <li key={k}>{k}</li>
          ))}
        </ul>
      </div>
    );
  }

  return !active ? (
    <div style={bannerStyles}>Please connect to access the app.</div>
  ) : null;
};
