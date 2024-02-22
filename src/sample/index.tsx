import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';

// components
import App from './components/App/App';

// core
import { ContextProvider } from '../core';

// store
import { store } from '../store/store';

// styles
import './index.scss';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <HelmetProvider>
      <ContextProvider>
        <App />
      </ContextProvider>
    </HelmetProvider>
  </Provider>,
);

window.store = store;
