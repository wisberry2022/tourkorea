/// <reference types="redux-persist" />
import { combineReducers } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

import personInfo from './personInfo';
import logState from './logState';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ["logState"],
}

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

// export default reducer;
export default persistReducer(persistConfig, reducer);

export type RootState = ReturnType<typeof reducer>;