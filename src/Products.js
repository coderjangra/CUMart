import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./cartSlice";
import { setSearchQuery, setCategory, selectFilteredProducts, selectCategories } from "./productsSlice";
import { useState } from "react";
import { Box, Typography, Grid, Card, CardContent, CardMedia, Button, TextField, Chip, Snackbar, Alert, InputAdornment } from "@mui/material";
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
      <Box mb={8} display="flex" flexDirection="column" gap={2}>
        <Typography variant="h2" color="text.primary">
          The Collection
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, fontWeight: 400 }}>
          Discover our curated selection of premium university essentials, perfectly crafted for your daily workflow.
        </Typography>
      </Box>

      <Box mb={8}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={5}>
            <TextField
              fullWidth
              placeholder="Search essentials..."
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
          <Grid item xs={12} md={7}>
            <Box display="flex" gap={1.5} flexWrap="wrap">
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
          </Grid>
        </Grid>
      </Box>

      {products.length === 0 ? (
        <Box py={16} textAlign="center" sx={{ bgcolor: 'background.paper', borderRadius: 4, border: '1px dashed', borderColor: 'divider' }}>
          <Typography variant="h2" mb={3} sx={{ opacity: 0.5 }}>🔍</Typography>
          <Typography variant="h4" color="text.primary" mb={1}>No results found</Typography>
          <Typography variant="body1" color="text.secondary">We couldn't find anything matching your search criteria.</Typography>
        </Box>
      ) : (
        <Grid container spacing={5}>
          {products.map(product => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ position: 'relative', pt: '100%', bgcolor: 'background.default' }}>
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
                
                <CardContent sx={{ flexGrow: 1, p: 4, display: 'flex', flexDirection: 'column' }}>
                  <Typography variant="caption" color="text.secondary" mb={1} letterSpacing="0.05em">
                    {product.category}
                  </Typography>
                  <Typography variant="h5" color="text.primary" sx={{ lineHeight: 1.3, mb: 2 }}>
                    {product.name}
                  </Typography>
                  <Typography variant="h4" color="text.primary" mt="auto" mb={4}>
                    ₹{product.price.toLocaleString("en-IN")}
                  </Typography>
                  <Button 
                    variant="contained" 
                    color="primary" 
                    fullWidth 
                    size="large"
                    onClick={() => addItem(product)}
                  >
                    Add to Bag
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}

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
            bgcolor: 'text.primary', 
            color: 'background.default', 
            borderRadius: 4, 
            px: 3, py: 1.5,
            fontSize: '1rem',
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center',
            gap: 1.5,
            boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
          }}
        >
          <span style={{ color: '#10b981', fontSize: '1.2rem' }}>✓</span> {toast}
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default Products;
