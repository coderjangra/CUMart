import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./cartSlice";
import { setSearchQuery, setCategory, selectFilteredProducts, selectCategories } from "./productsSlice";
import { useState } from "react";
import { Box, Typography, Grid, Card, CardContent, CardMedia, Button, TextField, Chip, Snackbar, Alert, InputAdornment, CardActions } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

function Products({ openCart }) {
  const dispatch = useDispatch();
  const products = useSelector(selectFilteredProducts);
  const categories = useSelector(selectCategories);
  const searchQuery = useSelector(state => state.products.searchQuery);
  const selectedCategory = useSelector(state => state.products.selectedCategory);
  const [toast, setToast] = useState("");

  const addItem = (product) => {
    dispatch(addToCart(product));
    setToast(`${product.name} added to cart`);
  };

  return (
    <Box>
      <Box mb={4} textAlign="center">
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Welcome to CUMart
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Find exactly what you need for campus life.
        </Typography>
      </Box>

      <Box mb={4} display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={2} alignItems="center" justifyContent="space-between">
        <TextField
          placeholder="Search products..."
          value={searchQuery}
          onChange={e => dispatch(setSearchQuery(e.target.value))}
          variant="outlined"
          size="small"
          sx={{ minWidth: { xs: '100%', md: '300px' } }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <Box display="flex" gap={1} flexWrap="wrap" justifyContent={{ xs: 'center', md: 'flex-end' }}>
          {categories.map(cat => (
            <Chip
              key={cat}
              label={cat}
              onClick={() => dispatch(setCategory(cat))}
              color={selectedCategory === cat ? "primary" : "default"}
              variant={selectedCategory === cat ? "filled" : "outlined"}
              clickable
            />
          ))}
        </Box>
      </Box>

      {products.length === 0 ? (
        <Typography variant="h6" textAlign="center" color="text.secondary" mt={10}>
          No products match your search.
        </Typography>
      ) : (
        <Grid container spacing={3}>
          {products.map(product => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', boxShadow: 3 }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={product.image}
                  alt={product.name}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="caption" color="text.secondary" gutterBottom display="block">
                    {product.category}
                  </Typography>
                  <Typography variant="h6" component="div" gutterBottom>
                    {product.name}
                  </Typography>
                  <Typography variant="h5" color="primary" fontWeight="bold">
                    ₹{product.price.toLocaleString("en-IN")}
                  </Typography>
                </CardContent>
                <CardActions sx={{ p: 2, pt: 0 }}>
                  <Button 
                    variant="contained" 
                    color="primary" 
                    fullWidth 
                    onClick={() => addItem(product)}
                  >
                    Add to Cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}

      <Snackbar open={!!toast} autoHideDuration={2000} onClose={() => setToast("")} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
        <Alert severity="success" variant="filled">{toast}</Alert>
      </Snackbar>
    </Box>
  );
}

export default Products;