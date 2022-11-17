import { useReducer } from 'react';
import { reducerFunc, customState, Action } from '../interfaceSet/Interface';

export const useInput = () => {
  const initialState: customState<string> = {
    id: '',
    pwd: '',
    email: '',
    tel: '',
    address: '',
  }

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

  return useReducer(Reducer, initialState);
}