import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

import reducer from './modules';

const makeStore = (context: any) => configureStore({
  reducer,
});

export const wrapper = createWrapper(makeStore);


