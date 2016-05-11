import { mapStateToProps } from '../../src/containers/main';

describe('./containers/main', function() {
  describe('.mapStateToProps', function() {
    it('must return correct props from state', function() {
      const state = { hello: { name: 'garry' } };
      mapStateToProps(state).name.must.eql('garry');
    });
  });
});
