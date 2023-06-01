import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalptice: 0,
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct(state, action) {
      state.items.push(action.payload);
    },
  },
});

export default cartSlice;
