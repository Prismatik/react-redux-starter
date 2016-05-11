import { handleActions } from 'redux-actions';

export const initialState = {
  name: 'world'
};

export const hello = handleActions({
  CHANGE_NAME: (state, action) => ({ name: action.payload })
}, initialState);
