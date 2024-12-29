/* eslint-disable @typescript-eslint/no-explicit-any */
import { sliceConstant } from '@/constants/slice.constant';
import { IAuth } from '@/models/auth.model';
import { BaseService } from '@/services/base.service';
import { createSlice } from '@reduxjs/toolkit';
import { jwtDecode } from 'jwt-decode';

const initialState: IAuth = {
  isAuthenticated: false,
  user: null,
};

const authSlice = createSlice({
  name: sliceConstant.AUTH,
  initialState,
  reducers: {
    login: (state, { payload }) => {
      if (payload.accessToken) {
        const decoded: any = jwtDecode(payload.accessToken);
        localStorage.setItem('accessToken', payload.accessToken);
        BaseService.setAuthToken(payload.accessToken);
        state.isAuthenticated = true;
        state.user = {
          ...state.user,
          id: decoded.userId,
          name: decoded.name,
          email: decoded.email,
          role: decoded.role,
        };
      }
    },

    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      localStorage.removeItem('accessToken');
    },

    setUser: (state, { payload }) => {
      state.user = payload;
    },

    setIsAuthenticated: (state, { payload }) => {
      state.isAuthenticated = payload;
    },
  },
});

export const { login, logout, setUser, setIsAuthenticated } = authSlice.actions;

export const authActionCreators = {
  login,
  logout,
  setUser,
  setIsAuthenticated,
};

export const authReducer = authSlice.reducer;
