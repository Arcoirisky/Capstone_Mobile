/* eslint no-param-reassign: ["error", { "props": false }] */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import CLIENT from '@/api/client';

export const fetchUser = createAsyncThunk('profile/fetchUser', async () => {
  try {
    const response = await CLIENT.get('/v1/account/');
    return response.data;
  } catch (error) {
    return error;
  }
});

export const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    email: null,
    familyName: null,
    givenName: null,
    picture: null,
    stores: [],
    currentStore: undefined,
  },
  reducers: {
    clear: (state) => {
      state.email = null;
      state.familyName = null;
      state.givenName = null;
      state.picture = null;
      state.stores = [];
      state.currentStore = undefined;
    },
  },
  extraReducers: {
    [fetchUser.fulfilled]: (state, action) => {
      const data = action.payload;
      state.email = data.email;
      state.familyName = data.familyName;
      state.givenName = data.givenName;
      state.picture = data.picture;
      state.stores = data.stores;
      if (!state.currentStore && data.stores.length === 0) {
        state.currentStore = 'empty';
      } else if (!state.currentStore && data.stores) {
        // eslint-disable-next-line prefer-destructuring
        state.currentStore = data.stores[0];
      }
    },
  },
});

export const { clear, clearCurrentStore } = profileSlice.actions;
export default profileSlice.reducer;
