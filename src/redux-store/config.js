import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';

import { rootReducer } from './root-reducer';

// Define your persist configuration
const persistConfig = {
  key: 'root', // key for the persisted state
  storage, // storage engine (localStorage by default)
  blacklist: ['user'], // optional: reducers you want to exclude from persistence
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create middleware array
const middleWares = [process.env.NODE_ENV === 'development' && logger].filter(Boolean);

// Configure the store with the persisted reducer and middleware
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleWares),
});

// Create a persistor to manage the persistence of the store
export const persistor = persistStore(store);
