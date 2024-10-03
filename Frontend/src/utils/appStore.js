import { configureStore,combineReducers } from '@reduxjs/toolkit';
import homeVideosGridReducer from './homeVideosSlice.js';
import userReducer from './userSlice.js';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};
const rootReducer = combineReducers({ user: userReducer,homeVideosGrid:homeVideosGridReducer });
const persistedReducer = persistReducer(persistConfig, rootReducer);
const appStore = configureStore({
  //Slices Go here
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(appStore);

export default appStore;