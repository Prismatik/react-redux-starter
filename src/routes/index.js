import React from 'react';
import { Route } from 'react-router';
import Main from '../containers/main';

export default function(store) {
  return (
    <Route path='/' component={Main}>

    </Route>
  )
}
