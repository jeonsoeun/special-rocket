/** @format */

import ReactDom from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import App from './App';
import store from './store/index';
import './styles/main.scss';

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
