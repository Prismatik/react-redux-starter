import _ from 'lodash';
import { CHANGE_NAME } from '../actions/hello';

const initialState = {
  name: 'world'
};

export function hello(state = initialState, action) {
  switch (action.type) {
    case CHANGE_NAME:
      return _.assign({}, state, {
        name: action.name
      });
    default:
      return state;
  }
}
