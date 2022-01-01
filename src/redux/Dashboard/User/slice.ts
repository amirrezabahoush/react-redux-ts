import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
    getAuthenticationId
} from "./actions";

type AuthenticationState  = {
  authUser: null | object;
  loading: boolean;
}

const initialState: AuthenticationState = {
  authUser: null,
  loading: false
};
const authenticationId = createSlice({
  name: "athenticationId",
  initialState,
  reducers: {},
  extraReducers: {
    // [getAuthenticationId.pending]: (state) => {
    //   state.loading = true;
    // },
    // [getAuthenticationId.rejected]: (state, action: PayloadAction<{}>) => {
    //   state.loading = false;
    // },
    // [getAuthenticationId.fulfilled]: (state, action: PayloadAction<{data: { result: ''}}>) => {
    //   state.loading = false;
    //   state.authUser = action.payload.data.result;
    // }
  },
});

export const authenticationIdReducer = authenticationId.reducer;