import { handleActions } from 'redux-actions';

const initialState = {
  name: 'world'
};

export const hello = handleActions({
  'CHANGE_NAME': (state, action) => ({ name: action.payload })
}, initialState);
