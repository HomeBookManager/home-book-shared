import { createRoot } from 'react-dom/client';

// components
import App from './components/App/App';

// core
import { ContextProvider } from '../core';

// styles
import './index.scss';

createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <App />
  </ContextProvider>,
);
