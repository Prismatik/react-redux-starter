import React from 'react';
import { Main, mapStateToProps } from '../../src/containers/main';
import { shallowComponent } from '../react_utils';

describe('./containers/main', function() {
  describe('.mapStateToProps', function() {
    it('must return correct props from state', function() {
      const state = { hello: { name: 'garry' } };
      mapStateToProps(state).name.must.eql('garry');
    });
  });
});
