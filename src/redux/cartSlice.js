import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: [], // Cart starts as an empty array
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      // Check if the product already exists in the cart
      const existingProduct = state.product.find(
        (item) => item.id === action.payload.id
      );
      if (existingProduct) {
        // If it exists, increment the quantity
        existingProduct.quantity += 1;
      } else {
        // If it doesn't exist, add it with a quantity of 1
        const productWithQuantity = { ...action.payload, quantity: 1 };
        state.product.push(productWithQuantity);
      }
    },
    removeProduct: (state, action) => {
      // Remove the product by ID
      state.product = state.product.filter(
        (item) => item.id !== action.payload.id
      );
    },
    increment: (state, action) => {
      // Find and increment the quantity of a product
      const product = state.product.find(
        (item) => item.id === action.payload.id
      );
      if (product) {
        product.quantity += 1;
      }
    },
    decrement: (state, action) => {
      // Find and decrement the quantity of a product
      const product = state.product.find(
        (item) => item.id === action.payload.id
      );
      if (product && product.quantity > 1) {
        product.quantity -= 1; // Decrease the quantity
      }
    },
    resetCart: (state) => {
      // Clear the cart
      state.product = [];
    },
  },
});

export const { addProduct, removeProduct, increment, decrement, resetCart } =
  cartSlice.actions;
export default cartSlice.reducer;
