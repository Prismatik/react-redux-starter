import { hello, initialState } from '../../../src/redux/reducers/hello';

describe('./redux/reducers/hello', function() {
  describe('CHANGE_NAME', function() {
    it('must change name', function() {
      const action = {
        type: 'CHANGE_NAME',
        payload: 'garry'
      };
      const result = hello(initialState, action);
      result.name.must.eql('garry');
    });
  });
});
