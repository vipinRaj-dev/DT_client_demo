import { configureStore } from "@reduxjs/toolkit";

import InfraSummaryReducer from "./Slices/InfraSummarySlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    InfraSummaryReducer : InfraSummaryReducer
  },
});


export type RootState = ReturnType<typeof store.getState>;

// export type AppDispatch = typeof store.dispatch;

export const useAppDispatch : () =>typeof store.dispatch = useDispatch  // useispatch hook

export const useAppSelector : TypedUseSelectorHook<ReturnType <typeof store.getState>> = useSelector  // useSelector hook


