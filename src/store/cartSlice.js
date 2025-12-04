import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    count: 0,
  },
  reducers: {
    addItem: (state, { payload }) => {
      const items = [...state.items];
      const index = items?.findIndex((item) => payload.id === item.id);
      console.log(index);
      if (index === -1) {
        items.push({ ...payload, count: 1 });
        console.log(items);
      } else {
        items[index] = { ...items[index], count: items[index].count + 1 };
      }
      state.items = items;
      state.count = state.count + 1;
      console.log(state);
    },
    removeItem: (state, { payload }) => {
      const items = state.items;
      const index = items?.findIndex((item) => payload.id === item.id);

      const itemCount = items[index].count;
      if (itemCount > 1) {
        const updatedItem = { ...items[index], count: itemCount - 1 };
        items[index] = { ...updatedItem };
        console.log(items);
        state.items = items;
        state.count = state.count - 1;
      } else {
        const updatedItems = items.filter((item) => item.id !== payload.id);
        state.items = updatedItems;
        state.count = state.count - 1;
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

console.log(cartSlice);
export const { addItem, clearCart, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
