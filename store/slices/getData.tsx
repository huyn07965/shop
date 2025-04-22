import axiosClient from "@/services";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// eslint-disable-next-line @typescript-eslint/no-explicit-any

interface getDataState {
  isLoading: boolean;
  data: any;
  isError: boolean;
}

type ParamsType = {
  offset?: number;
  limit?: number;
  sortBy?: string;
  order?: string;
  special?: boolean;
  is_new?: boolean;
  min_price?: number;
  max_price?: number;
  search?: string;
  name?: string;
};

const initialState: getDataState = {
  isLoading: true,
  data: {},
  isError: false,
};

export type GetDataPropsType = {
  path: string;
  params?: ParamsType;
};

export const fetchData = createAsyncThunk(
  "fetchData",
  async ({ path, params }: GetDataPropsType) => {
    const response = await axiosClient.get(`${path}`, {
      params: params,
    });
    return response.data ? response.data : response;
  }
);

const getDataSlice = createSlice({
  name: "GetData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state) => {
        state.isError = true;
        state.data = undefined;
      });
  },
});

export default getDataSlice.reducer;
