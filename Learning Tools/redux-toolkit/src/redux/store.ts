import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counter/index";
import profileReducer from "./slices/profile";

export const store = configureStore({
        reducer: {
                counter: counterSlice.reducer,
                profile: profileReducer.reducer,
        },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch