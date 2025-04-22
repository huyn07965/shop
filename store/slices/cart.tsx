import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer } from "redux-persist";

export type CartType = {
  id: number;
  sum: number;
  product_id?: number;
  total?: number;
  quantity?: number;
};

type InitialStateType = {
  cart: CartType[];
};

const initialState: InitialStateType = {
  cart: [],
};

const cartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    AddCart: (state, action) => {
      const { id, sum = 1, update = false, sumUpdate, total } = action.payload;
      let newData = [...state.cart];
      let exist = newData.find((item) => item.id === id);
      if (exist) {
        newData = newData.map((item) => {
          let sumCurrent = item.sum;
          let totalCurrent = item.total;
          if (item.id === id) {
            if (update) {
              sumCurrent = sumUpdate;
              totalCurrent = total;
            } else {
              sumCurrent += sum;
            }
          }
          return {
            ...item,
            sum: sumCurrent,
            total: totalCurrent,
            product_id: item.id,
            quantity: sumCurrent,
          };
        });
      } else {
        newData.push({
          id,
          sum,
          total,
          product_id: id,
          quantity: sum,
        });
      }
      return {
        ...state,
        cart: newData,
      };
    },
    RemoveCart: (state, action) => {
      const { id } = action.payload;
      let newData = [...state.cart];
      newData = newData.filter((item) => item.id !== id);
      return {
        ...state,
        cart: newData,
      };
    },
    RemoveAll: (state, action) => {
      return {
        ...state,
        cart: [],
      };
    },
  },
});

const persistConfig = {
  key: "cart",
  storage: AsyncStorage,
};

export const { AddCart, RemoveCart, RemoveAll } = cartSlice.actions;
export default persistReducer(persistConfig, cartSlice.reducer);
