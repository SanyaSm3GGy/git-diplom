import { createSlice } from '@reduxjs/toolkit';

function Price(state) {
  state.totalprice = state.items.reduce((sum, obj) => {
    return obj.price * obj.count + sum;
  }, 0);
}

const initialState = {
  totalprice: 0,
  cartEmpty: true,
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const findItems = state.items.find((obj) => obj.id === action.payload.id);

      if (findItems) {
        findItems.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }
      state.cartEmpty = false;
      Price(state);
    },
    removeItem(state, action) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
      state.cartEmpty = true;
      Price(state);
    },
    clearItems(state) {
      state.items = [];
      state.cartEmpty = true;
    },
  },
});

export const { addItem, removeItem, clearItems } = cartSlice.actions;

export default cartSlice.reducer;
