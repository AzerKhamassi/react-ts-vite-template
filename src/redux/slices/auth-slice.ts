import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'


interface authState {
    user: null | any;
    token: null | string;
}

const initialState: authState = {
    user: null,
    token: null,

}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setLoginCredentials: (
            state,
            { payload: { user, token } }: PayloadAction<{ user: any; token: string }>
        ) => {
            state.user = user;
            state.token = token;
        },

    },
})

export const { setLoginCredentials } = authSlice.actions;

export default authSlice.reducer

export const selectCurrentUser = (state: any) => state.auth.user
export const selectCurrentToken = (state: any) => state.auth.token

