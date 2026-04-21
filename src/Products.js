import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./cartSlice";
import { setSearchQuery, setCategory, selectFilteredProducts, selectCategories } from "./productsSlice";
import { useState } from "react";
import { Box, Typography, Grid, Card, CardContent, CardMedia, Button, TextField, Chip, Snackbar, Alert, InputAdornment } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

function Products({ openCart }) {
  const dispatch = useDispatch();
  const products = useSelector(selectFilteredProducts);
  const categories = useSelector(selectCategories);
  const searchQuery = useSelector(state => state.products.searchQuery);
  const selectedCategory = useSelector(state => state.products.selectedCategory);
  const cartCount = useSelector(state => state.cart.reduce((sum, i) => sum + i.qty, 0));
  const [toast, setToast] = useState("");

  const addItem = (product) => {
    dispatch(addToCart(product));
    setToast(`${product.name} added to cart`);
  };

  return (
    <Box>
      <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} justifyContent="space-between" alignItems={{ xs: 'flex-start', md: 'center' }} mb={6} gap={3}>
        <Box>
          <Typography variant="h3" color="white" fontWeight="800" gutterBottom>
            CUMart Products
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Essential items, simple prices, smooth shopping.
          </Typography>
        </Box>

        <Button 
          variant="contained" 
          color="primary" 
          size="large" 
          onClick={openCart}
          startIcon={<AddShoppingCartIcon />}
          sx={{ px: 4, py: 1.5 }}
        >
          View Cart {cartCount > 0 && `(${cartCount})`}
        </Button>
      </Box>

      <Card sx={{ p: 3, mb: 6, bgcolor: 'rgba(59, 130, 246, 0.05)', borderColor: 'rgba(59, 130, 246, 0.2)' }}>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              placeholder="Search products..."
              value={searchQuery}
              onChange={e => dispatch(setSearchQuery(e.target.value))}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: 'text.secondary' }} />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <Box display="flex" gap={1.5} flexWrap="wrap">
              {categories.map(cat => (
                <Chip
                  key={cat}
                  label={cat}
                  onClick={() => dispatch(setCategory(cat))}
                  color={selectedCategory === cat ? "primary" : "default"}
                  variant={selectedCategory === cat ? "filled" : "outlined"}
                  sx={{ px: 1, py: 2, fontSize: '0.95rem' }}
                />
              ))}
            </Box>
          </Grid>
        </Grid>
      </Card>

      {products.length === 0 ? (
        <Box py={10} textAlign="center">
          <Typography variant="h5" color="text.secondary">No products match your search.</Typography>
        </Box>
      ) : (
        <Grid container spacing={4}>
          {products.map(product => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                <Box 
                  sx={{ 
                    height: 200, 
                    bgcolor: 'rgba(255,255,255,0.02)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    p: 3
                  }}
                >
                  {/* Using an icon fallback if images aren't present */}
                  <Typography variant="h1" color="rgba(255,255,255,0.1)">🛍️</Typography>
                </Box>
                <CardContent sx={{ flexGrow: 1, p: 3, display: 'flex', flexDirection: 'column' }}>
                  <Typography variant="caption" color="secondary.light" fontWeight="bold" textTransform="uppercase" gutterBottom>
                    {product.category}
                  </Typography>
                  <Typography variant="h5" color="white" fontWeight="700" gutterBottom>
                    {product.name}
                  </Typography>
                  <Typography variant="h4" color="primary.main" fontWeight="800" mt="auto" mb={3}>
                    ₹{product.price.toLocaleString("en-IN")}
                  </Typography>
                  <Button 
                    variant="outlined" 
                    color="primary" 
                    fullWidth 
                    onClick={() => addItem(product)}
                  >
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}

      <Snackbar open={!!toast} autoHideDuration={2000} onClose={() => setToast("")} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
        <Alert severity="success" variant="filled" sx={{ borderRadius: 2 }}>{toast}</Alert>
      </Snackbar>
    </Box>
  );
}

export default Products;
