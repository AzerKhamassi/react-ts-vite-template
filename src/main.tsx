import "bootstrap/dist/css/bootstrap.css";
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import IntlProvider from "./i18n";
import { persistor, store } from "./redux";
import './theme/theme.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <IntlProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </IntlProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)
