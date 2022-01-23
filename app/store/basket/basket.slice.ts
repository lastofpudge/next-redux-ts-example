import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Basket } from "./basketTypes";

const BasketState: Basket = {
  total: 500,
  items: [
    {
      id: 1,
      qty: 1,
      title: "Throwback Hip Bag",
      color: "Salmon",
      imageUrl:
        "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",
      price: 100,
      totalPrice: 100,
    },
    {
      id: 2,
      qty: 2,
      title: "Medium Stuff Satchel",
      color: "Blue",
      imageUrl:
        "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
      price: 200,
      totalPrice: 400,
    },
  ],
};

export const basketItemsSlice = createSlice({
  name: "basket",
  initialState: BasketState,
  reducers: {
    increment: (state, action: PayloadAction<number>) => {
      state.items.map(function (item) {
        if (item.id === action.payload) {
          item.qty++;
          item.totalPrice = item.price * item.qty;
          state.total = state.total + item.price;
        }
      });
    },
    decrement: (state, action: PayloadAction<number>) => {
      state.items.map(function (item) {
        if (item.id === action.payload && item.qty > 1) {
          item.qty--;
          item.totalPrice = item.price * item.qty;
          state.total = state.total - item.price;
        }
      });
    },
    remove: (
      state,
      action: PayloadAction<{ id: number; totalPrice: number }>
    ) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
      state.total = state.total - action.payload.totalPrice;
    },
  },
});

export const { increment, decrement, remove } = basketItemsSlice.actions;
export default basketItemsSlice.reducer;
