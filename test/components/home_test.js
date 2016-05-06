import React from 'react';
import Home from '../../src/components/home';
import { shallowComponent } from '../react_utils';

describe('./components/home', function() {
  describe('.render', function() {
    it('must render correctly', function() {
      const el = <Home name='garry' onNameChange={function(){}} />;
      const rendered = <div>
        <input type='text' onChange={function(){}} />
        <p>Hello garry</p>
      </div>;

      shallowComponent(el).must.be.jsx(rendered);
    });
  });
});
