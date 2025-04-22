import { createSlice } from "@reduxjs/toolkit";

type InitialStateFilterType = {
  data: {
    active: string;
    fromValue: number;
    toValue: number;
  };
};

const initialState: InitialStateFilterType = {
  data: {
    active: "Mới nhất",
    fromValue: 1,
    toValue: 50000000,
  },
};

const filterSlice = createSlice({
  name: "Filter",
  initialState: initialState,
  reducers: {
    Filter: (state, actions) => {
      const { active, fromValue, toValue } = actions.payload;
      return {
        ...state.data,
        data: {
          active,
          fromValue,
          toValue,
        },
      };
    },
  },
});

export const { Filter } = filterSlice.actions;
export default filterSlice.reducer;
