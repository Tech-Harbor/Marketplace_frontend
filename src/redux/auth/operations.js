// import { createAsyncThunk } from '@reduxjs/toolkit';
// import { useLogin } from '../../hooks/apiRequests.js';
// import mainInstance from '../../api/axiosAPI.js';
//
// // const loginFn = useLogin();
//
// export const loginUser = createAsyncThunk('auth/login', async (body, thunkAPI) => {
//   try {
//     // await loginFn(body);
//     const { data } = await mainInstance.post('/api/auth/login', body);
//     return data;
//   } catch (e) {
//     return thunkAPI.rejectWithValue(e.message);
//   }
// });
