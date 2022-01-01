import { createLogger } from "redux-logger";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'


let middleware = [];
const logger = createLogger();
if (process.env.NODE_ENV === "development") {
  middleware = [
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
    logger,
  ];
} else {
  middleware = [
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
  ];
}

const reducers = combineReducers({

});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware,
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;

