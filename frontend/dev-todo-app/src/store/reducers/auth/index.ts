import AsyncStorage from '@react-native-async-storage/async-storage';
import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';

const initialState = {
  value: 0,
  userId: null,
  token: null, // Store the token as well
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    setUserId(state, action) {
      state.userId = action.payload.userId;
      state.token = action.payload.token; // Store the token if returned by the backend
    },
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
export const { auth, sum, setUserId } = authSlice.actions;

// export slices
export const reducer = persistReducer(config, authSlice.reducer);
