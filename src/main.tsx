import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import registerServiceWorker from '@/utilities/registerServiceWorker.ts';

const root = document.getElementById('root')!;

if (!('serviceWorker' in navigator)) {
  root.innerText = 'This app only works on modern browsers. Can only be used with browser service worker support.';
} else {
  registerServiceWorker().then(() => {
    ReactDOM.createRoot(root).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    );
  });
}

