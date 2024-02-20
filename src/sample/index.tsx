import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';

// components
import App from './components/App/App';

// core
import { ContextProvider } from '../core';

// styles
import './index.scss';

createRoot(document.getElementById('root')).render(
  <HelmetProvider>
    <ContextProvider>
      <App />
    </ContextProvider>
  </HelmetProvider>,
);
