/// <reference types="redux-persist" />
import { combineReducers } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import personInfo from './personInfo';
import logState from './logState';

export const reducer = (state: any, action: { type: string, payload: object }) => {
  if (action.type === HYDRATE) {
    return {
      ...state,
      ...action.payload
    };
  }
  return combineReducers({
    personInfo, logState,
  })(state, action);
}


export default reducer;

export type RootState = ReturnType<typeof reducer>;