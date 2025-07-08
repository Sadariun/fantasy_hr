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
        if (typeof window === 'undefined') return '/';

        // 1. Running from local file system – use empty basename
        if (window.location.protocol === 'file:') return '';

        const repoBase = '/fantasy_hr';

        // 2. GitHub Pages – path starts with /fantasy_hr
        if (window.location.pathname.startsWith(repoBase)) return repoBase;

        // 3. Dev server or other hosting at root
        return '/';
      })()}
    >
      <App />
    </BrowserRouter>
  </React.StrictMode>
); 