import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import './i18n';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter
      basename={(() => {
        const base = import.meta.env.BASE_URL || '/';
        if (import.meta.env.PROD) {
          // For production build: if base is './', use empty basename so paths are relative.
          if (base === './') return '';
          return base.replace(/\/$/, '');
        }
        // Dev server
        return '/';
      })()}
    >
      <App />
    </BrowserRouter>
  </React.StrictMode>
); 