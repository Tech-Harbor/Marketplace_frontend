import { createAsyncThunk } from '@reduxjs/toolkit';
import mainInstance from '../../api/axiosAPI.js';
import { API_URL } from '../../constants/index.js';

export const loginUserThunk = createAsyncThunk('auth/login', async (body, thunkAPI) => {
  try {
    const { data } = await mainInstance.post(API_URL.LOGIN, { ...body });
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const requestEmailThunk = createAsyncThunk('auth/requestEmail', async (body, thunkAPI) => {
  try {
    const { data } = await mainInstance.post(API_URL.REQUEST_EMAIL, { ...body });
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const resetPasswordThunk = createAsyncThunk('auth/resetPassword', async (body, thunkAPI) => {
  try {
    await mainInstance.put(body.url, { password: body.password });
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});
