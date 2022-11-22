import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import AsyncStorage from 'redux-persist/lib/storage';
// import storage from 'redux-persist/lib/storage';
import { reducer } from './modules';
import { persistStore, persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ["logState"],
}

const persistedReducer = persistReducer(persistConfig, reducer);

const storeConfig = {
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware: any) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
    }
  })
}

const makeStore = (context: any) => configureStore({
  reducer,
});


export const wrapper = createWrapper(makeStore);
export const pstore = configureStore(storeConfig);

