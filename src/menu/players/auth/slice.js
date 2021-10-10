import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import Router from 'next/router';
import Cookies from 'universal-cookie';

export const logInPlayer = createAsyncThunk('player/logIn', async (arg, { rejectWithValue }) => {
  try {
    const url = '/api/players/auth/login';
    const player = await axios({ method: 'get', url });
    return player;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});
//
export const logOutPlayer = createAsyncThunk('player/logOut', async (token, { rejectWithValue }) => {
  try {
    const url = '/api/players/auth/logout';
    const config = { headers: { Authorization: `Bearer ${token}` } };
    await axios({ method: 'post', url, config });
    const cookies = new Cookies();
    cookies.remove('player_session');
    Router.push('/');
    return;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

const playerSlice = createSlice({
  name: 'player',
  initialState: { data: null, isAuthenticated: false },
  reducers: {},
  extraReducers: {
    [logInPlayer.pending]: state => state,
    [logInPlayer.fulfilled]: (state, { payload }) => ({ data: payload.player, isAuthenticated: true }),
    [logInPlayer.rejected]: state => state,
    [logOutPlayer.pending]: state => state,
    [logOutPlayer.fulfilled]: () => ({ data: null, isAuthenticated: false }),
    [logOutPlayer.rejected]: state => state
  }
});

const { reducer } = playerSlice;
export default reducer;
