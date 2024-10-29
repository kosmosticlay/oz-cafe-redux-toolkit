import data from "../assets/data";
import { configureStore, createSlice } from "@reduxjs/toolkit";

// createSlice함수로 액션 타입, 생성자, 리듀서를 포함하는 슬라이스를 생성 가능

export const menuSlice = createSlice({
  name: "menu",
  initialState: data.menu,
  reducers: {}, // 상태 변경 기능이 필요 없으므로 빈 객체로 존재
});

export const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart(state, action) {
      return [...state, action.payload];
    },
    removeFromCart(state, action) {
      return state.filter((el) => action.payload.id !== el.id);
    },
  },
});

export const store = configureStore({
  reducer: {
    menuReducer: menuSlice.reducer,
    cartReducer: cartSlice.reducer, // createSlice가 자동으로 모든 리듀서 함수를 합쳐 단일 리듀서 함수(객체)로 반환
  },
});
