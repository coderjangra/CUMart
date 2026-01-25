import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: [
    {
      id: 1,
      name: "Laptop",
      price: 50000,
      image: "/images/laptop.jpg"
    },
    {
      id: 2,
      name: "Smartphone",
      price: 30000,
      image: "/images/phone.jpg"
    },
    {
      id: 3,
      name: "Headphones",
      price: 2000,
      image: "/images/headphone.jpg"
    }
  ],
  reducers: {}
});

export default productsSlice.reducer;
