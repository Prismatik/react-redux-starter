import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import configureStore from './redux/store';
import routes from './routes';

const targetEl = document.getElementById('app');
const store = configureStore();

React.render((
  <Provider store={store}>
    {() => <Router routes={routes(store)} />}
  </Provider>
), targetEl);
