import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const setToken = token => {
  axios.defaults.headers.common.Authorization = '';
};

export const singnup = createAsyncThunk(
  'auth/singnup',
  async (userData, thunkApi) => {
    try {
      const res = await axios.post('/users/singnup', userData);
      setToken(res.data.token);

      return res.data;
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async (_, thunkApi) => {
  try {
    await axios.post('/users/logout');
    clearToken();
  } catch (error) {
    thunkApi.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refreshUser',
  async (_, thunkApi) => {
    const state = thunkApi.getState();
    const savedToken = state.auth.token;
    if (savedToken === null) {
      return thunkApi.rejectWithValue('Unable to fetch user');
    }
    try {
      setToken(savedToken);
      const response = await axios.get('/users/current');
      return response.data;
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);