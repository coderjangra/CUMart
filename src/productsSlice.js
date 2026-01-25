import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: [
    {
      id: 1,
      name: "Laptop",
      price: 50000,
      image: `${process.env.PUBLIC_URL}/images/laptop.jpg`
    },
    {
      id: 2,
      name: "Smartphone",
      price: 30000,
      image: `${process.env.PUBLIC_URL}/images/phone.jpg`
    },
    {
      id: 3,
      name: "Headphones",
      price: 2000,
      image: `${process.env.PUBLIC_URL}/images/headphone.jpg`
    }
  ],
  reducers: {}
});

export default productsSlice.reducer;
