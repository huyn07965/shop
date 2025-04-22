import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer } from "redux-persist";
import axios from "axios";
import axiosClient from "@/services";

interface GetDataLoginState {
  isLogin: boolean;
  token: string[];
}

type DataLoginType = {
  email: string;
  password: string;
};

type GetDataLoginType = {
  data: DataLoginType;
};

export const fetchLogin = createAsyncThunk(
  "fetchLogin",
  async ({ data }: GetDataLoginType) => {
    const response = await axios.post(
      "http://apiforlearning.zendvn.com/api/auth/login",
      data,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    return response.data ? response.data : response;
  }
);
const initialState: GetDataLoginState = {
  token: [],
  isLogin: false,
};

const authSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    Logout: (state, action) => {
      AsyncStorage.removeItem("access_token");
      return {
        ...state,
        token: [],
        isLogin: false,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLogin.fulfilled, (state, action) => {
        const { access_token } = action.payload;
        AsyncStorage.setItem("access_token", access_token);

        return {
          ...state,
          token: access_token,
          isLogin: true,
        };
      })
      .addCase(fetchLogin.rejected, (state, action) => {
        console.log(action.error.message);
      });
  },
});

const persistConfig = {
  key: "auth",
  storage: AsyncStorage,
};

export const { Logout } = authSlice.actions;
export default persistReducer(persistConfig, authSlice.reducer);
