import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAuthenticationId = createAsyncThunk(
    "authId/get",
    async (args, thunkAPI) => {
      return {data: {
        result: 'user'
      }}
    }
  );