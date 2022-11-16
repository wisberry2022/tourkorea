import { combineReducers } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import personInfo from './personInfo';

const reducer = (state: any, action: { type: string, payload: object }) => {
  if (action.type === HYDRATE) {
    return {
      ...state,
      ...action.payload
    };
  }
  return combineReducers({
    personInfo,
  })(state, action);
}

export default reducer;

export type RootState = ReturnType<typeof reducer>;