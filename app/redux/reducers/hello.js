import { CHANGE_NAME } from '../actions/hello';

const initialState = {
  name: 'world'
};

export function hello(state = initialState, action) {
  switch (action.type) {
    case CHANGE_NAME:
      return { ...state, name: action.name };
      break
    default:
      return state;
  }
}
