import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import { reducer, initialState } from './redux';
import 'normalize.css';

const store = createStore(reducer, initialState);

const AppWithStore = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<AppWithStore />, document.getElementById('root'));
registerServiceWorker();
