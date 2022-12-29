import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ProvideCamera } from './services/useCamera/useCamera';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ProvideCamera>
      <App />
    </ProvideCamera>
  </React.StrictMode>
);