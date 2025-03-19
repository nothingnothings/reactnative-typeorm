import AsyncStorage from '@react-native-async-storage/async-storage';
import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';

const initialState = {
  value: 0,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    auth(state, action) {},
    sum(state) {
      state.value += 1;
    },
  },
});

const config = {
  key: '@dev-todo-auth',
  storage: AsyncStorage,
  version: 1,
};

// export actions
export const { auth, sum } = authSlice.actions;

// export slices
export const reducer = persistReducer(config, authSlice.reducer);
