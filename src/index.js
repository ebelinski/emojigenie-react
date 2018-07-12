import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';

import { reducer, filterMiddleware, actionTypes, initialState } from './redux';

const store = createStore(reducer, initialState, applyMiddleware(filterMiddleware));

const AppWithStore = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<AppWithStore />, document.getElementById('root'));
registerServiceWorker();
