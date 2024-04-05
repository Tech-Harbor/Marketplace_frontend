import { createAsyncThunk } from '@reduxjs/toolkit';
import mainInstance from '../../api/axiosAPI.js';
import { API_URL } from '../../constants/index.js';

export const loginUserThunk = createAsyncThunk('auth/login', async (body, thunkAPI) => {
  try {
    const { data } = await mainInstance.post(API_URL.LOGIN, { ...body });
    console.log('loginUserThunk data', data);
    return data;
  } catch (e) {
    console.log('loginUserThunk e.message', e.message);
    return thunkAPI.rejectWithValue(e.message);
  }
});
