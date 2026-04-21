import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./cartSlice";
import { setSearchQuery, setCategory, selectFilteredProducts, selectCategories } from "./productsSlice";
import { useState } from "react";
import { Box, Typography, Grid, Card, CardContent, CardMedia, Button, TextField, Chip, Snackbar, Alert, InputAdornment, Container } from "@mui/material";
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
    <Box sx={{ pb: 12 }}>
      {/* Premium Header Area */}
      <Box 
        display="flex" 
        flexDirection="column" 
        mb={6} 
        mt={4}
      >
        <Typography variant="h3" color="text.primary" gutterBottom>
          The Collection
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 500, fontSize: '1.1rem' }}>
          Discover our curated selection of premium university essentials, perfectly crafted for your daily workflow.
        </Typography>
      </Box>

      {/* Elegant Search & Filter Bar */}
      <Box sx={{ mb: 8 }}>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={5}>
            <TextField
              fullWidth
              placeholder="Search essentials..."
              value={searchQuery}
              onChange={e => dispatch(setSearchQuery(e.target.value))}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: 'text.secondary', ml: 1 }} />
                  </InputAdornment>
                ),
              }}
              sx={{ '& .MuiOutlinedInput-root': { py: 0.5 } }}
            />
          </Grid>
          <Grid item xs={12} md={7}>
            <Box display="flex" gap={1.5} flexWrap="wrap">
              {categories.map(cat => (
                <Chip
                  key={cat}
                  label={cat}
                  onClick={() => dispatch(setCategory(cat))}
                  color={selectedCategory === cat ? "primary" : "default"}
                  variant={selectedCategory === cat ? "filled" : "outlined"}
                  sx={{ px: 2, py: 2.5, fontSize: '0.95rem' }}
                />
              ))}
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Premium Product Grid */}
      {products.length === 0 ? (
        <Box py={16} textAlign="center" sx={{ bgcolor: 'rgba(0,0,0,0.02)', borderRadius: 6 }}>
          <Typography variant="h2" color="text.secondary" mb={2}>🔍</Typography>
          <Typography variant="h5" color="text.primary" fontWeight="700">No results found</Typography>
          <Typography variant="body1" color="text.secondary">We couldn't find anything matching your search criteria.</Typography>
        </Box>
      ) : (
        <Grid container spacing={5}>
          {products.map(product => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
              <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                {/* Product Image Area */}
                <Box sx={{ position: 'relative', pt: '100%', bgcolor: '#f4f4f5' }}>
                   <CardMedia
                    component="img"
                    image={product.image}
                    alt={product.name}
                    sx={{ 
                      position: 'absolute',
                      top: 0, left: 0, width: '100%', height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </Box>
                
                {/* Product Info Area */}
                <CardContent sx={{ flexGrow: 1, p: 4, display: 'flex', flexDirection: 'column', bgcolor: '#ffffff' }}>
                  <Typography variant="caption" color="text.secondary" mb={1}>
                    {product.category}
                  </Typography>
                  <Typography variant="h6" color="text.primary" sx={{ lineHeight: 1.3, mb: 2 }}>
                    {product.name}
                  </Typography>
                  <Typography variant="h5" color="text.primary" fontWeight="700" mt="auto" mb={4}>
                    ₹{product.price.toLocaleString("en-IN")}
                  </Typography>
                  <Button 
                    variant="contained" 
                    color="secondary" 
                    fullWidth 
                    size="large"
                    onClick={() => addItem(product)}
                    sx={{ py: 1.5, borderRadius: '12px' }}
                  >
                    Add to Bag
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}

      {/* Elegant Toast */}
      <Snackbar 
        open={!!toast} 
        autoHideDuration={2500} 
        onClose={() => setToast("")} 
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          icon={false}
          severity="success" 
          sx={{ 
            bgcolor: '#09090b', 
            color: '#ffffff', 
            borderRadius: '16px', 
            boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
            px: 3, py: 1.5,
            fontSize: '0.95rem',
            fontWeight: 500,
            display: 'flex',
            alignItems: 'center',
            gap: 1
          }}
        >
          <span style={{ color: '#34d399', fontSize: '1.2rem', marginRight: '8px' }}>✓</span> {toast}
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default Products;
