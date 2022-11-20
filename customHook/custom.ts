import { useReducer } from 'react';
import { reducerFunc, customState, Action, useInputProps } from '../interfaceSet/Interface';
import { signUpState, signInState } from './reducers';

export const useInput = (type: useInputProps): any => {
  if (type === 'SignUp') {
    const Reducer: reducerFunc<customState<string>, Action> = (state: customState<string>, action: Action) => {
      switch (action.type) {
        case 'ADD':
          state[action.event.target.name] = action.event.target.value;
        case 'DELETE':
          return state;
        default:
          return state;
      }
    }
    return useReducer(Reducer, signUpState);
  } else if (type === 'SignIn') {
    const Reducer: reducerFunc<customState<string>, Action> = (state: customState<string>, action: Action) => {
      switch (action.type) {
        case 'ADD':
          state[action.event.target.name] = action.event.target.value;
        case 'DELETE':
          return state;
        default:
          return state;
      }
    }
    return useReducer(Reducer, signInState)
  }
}


