import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import productApi from "../api/productApi";

export const fetchAsyncProducts = createAsyncThunk(
  "products/fetchAsyncProducts",
  async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    return response;
  }
);

export const fetchAsyncProductsDetail = createAsyncThunk(
  "products/fetchAsyncProductsDetail",
  async (id) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    return response;
  }
);


const productSlice = createSlice({
  name: "products",
  initialState:[],
  reducers: {
    addItem: (state, action) => {
      const exist = state.find((x) => x.id === action.payload.id);
      if (exist) {
        // Increase the Quantity
        return state.map((x) =>
          x.id === action.payload.id ? { ...x, qty: x.qty + 1 } : x
        );
      } else {
        return [...state, { ...action.payload, qty: 1 }];
      }
    },
 
  deleteItem: (state, action) => {
    const exist1 = state.find((x) => x.id === action.payload.id);
    if (exist1.qty === 1) {
      return state.filter((x) => x.id !== exist1.id);
    } else {
      return state.map((x) =>
        x.id === action.payload.id ? { ...x, qty: x.qty - 1 } : x
      );
    }
  },
 },
  extraReducers: {
    [fetchAsyncProducts.pending]: () => {
      console.log("Pending");
    },
    [fetchAsyncProducts.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully!");
      return { ...state.payload, products: payload };
    },
    [fetchAsyncProducts.rejected]: () => {
      console.log("Rejected!");
    },
    [fetchAsyncProductsDetail.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully!");
      return { ...state.payload, products: payload };
    },
  },
});
export const { addItem,deleteItem } = productSlice.actions;
export const getAllProducts = (state) => state.products;
export default productSlice.reducer;
