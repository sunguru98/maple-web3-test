import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Web3ContextProvider } from './contexts/Web3ContextProvider';

import 'antd/dist/antd.css';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Web3ContextProvider>
      <App />
    </Web3ContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
