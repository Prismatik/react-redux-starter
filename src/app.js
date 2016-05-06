import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import configureStore from './redux/store';
import routes from './routes';

const store = configureStore();

ReactDOM.render((
  <Provider store={store}>
    <Router history={hashHistory} routes={routes(store)} />
  </Provider>
), document.getElementById('app'));
