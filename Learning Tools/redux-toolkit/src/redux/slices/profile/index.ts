import { createSlice } from "@reduxjs/toolkit";

const profileReducer = createSlice({
        initialState: "Empty String",
        name: "Profile",
        reducers: {
                setProfile: (state, action) => state = action.payload
        }
})

export const { setProfile } = profileReducer.actions
export default profileReducer;