import { createSlice } from "@reduxjs/toolkit";

const allProducts = [
  { id: 1, name: "Laptop", price: 50000, category: "Electronics", image: `${process.env.PUBLIC_URL}/images/laptop.jpg` },
  { id: 2, name: "Smartphone", price: 30000, category: "Electronics", image: `${process.env.PUBLIC_URL}/images/phone.jpg` },
  { id: 3, name: "Headphones", price: 2000, category: "Electronics", image: `${process.env.PUBLIC_URL}/images/headphone.jpg` },
  { id: 4, name: "Backpack", price: 1500, category: "Accessories", image: `${process.env.PUBLIC_URL}/images/backpack.jpg` },
  { id: 5, name: "Water Bottle", price: 400, category: "Accessories", image: `${process.env.PUBLIC_URL}/images/bottle.jpg` },
  { id: 6, name: "Notebook", price: 120, category: "Stationery", image: `${process.env.PUBLIC_URL}/images/notebook.jpg` },
  { id: 7, name: "Pen Set", price: 80, category: "Stationery", image: `${process.env.PUBLIC_URL}/images/pens.jpg` },
  { id: 8, name: "Desk Lamp", price: 1200, category: "Electronics", image: `${process.env.PUBLIC_URL}/images/lamp.jpg` }
];

const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: allProducts,
    searchQuery: "",
    selectedCategory: "All"
  },
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setCategory: (state, action) => {
      state.selectedCategory = action.payload;
    }
  }
});

export const { setSearchQuery, setCategory } = productsSlice.actions;

export const selectFilteredProducts = state => {
  const { items, searchQuery, selectedCategory } = state.products;
  return items.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || p.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
};

export const selectCategories = state => [
  "All",
  ...new Set(state.products.items.map(p => p.category))
];

export default productsSlice.reducer;
