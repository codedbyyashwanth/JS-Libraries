import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./slice/todo";

export const store = configureStore({
        reducer: {
                todo: todoSlice.reducer,
        }
});

export type RootState = ReturnType<typeof store.getState>
export type Dispatch = typeof store.dispatch