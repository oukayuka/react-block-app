import { createBrowserHistory } from 'history';
import React from 'react';
import ReactDOM from 'react-dom';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import App from './App';
import i18n from './i18n';
import registerServiceWorker from './registerServiceWorker';
import store from './store';

const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <I18nextProvider i18n={i18n}>
      <Router history={history}>
        <App />
      </Router>
    </I18nextProvider>
  </Provider>,
  document.getElementById('root') as HTMLElement,
);

registerServiceWorker();
