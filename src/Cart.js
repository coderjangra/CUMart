import { useDispatch, useSelector } from "react-redux";
import { addToCart, decrementQty, removeFromCart, clearCart } from "./cartSlice";
import { useState } from "react";
import { Drawer, Box, Typography, IconButton, Button, Divider, List, ListItem, Snackbar, Alert, CardMedia } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function Cart({ isOpen, closeCart }) {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const [ordered, setOrdered] = useState(false);

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const handleOrder = () => {
    setOrdered(true);
    dispatch(clearCart());
    setTimeout(() => {
      setOrdered(false);
      closeCart();
    }, 2500);
  };

  return (
    <>
      <Drawer 
        anchor="right" 
        open={isOpen} 
        onClose={closeCart}
        PaperProps={{
          sx: {
            width: { xs: '100%', sm: 500 },
          }
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          <Box p={5} pb={3} display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h4" color="text.primary">Your Bag</Typography>
            <IconButton onClick={closeCart} sx={{ bgcolor: 'rgba(0,0,0,0.04)' }}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Divider />

          <Box flexGrow={1} overflow="auto" p={5}>
            {cart.length === 0 ? (
              <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100%">
                <Typography variant="h1" mb={4} sx={{ opacity: 0.2 }}>🛍️</Typography>
                <Typography variant="h5" color="text.primary" mb={2}>Your bag is empty.</Typography>
                <Typography variant="body1" color="text.secondary" textAlign="center" mb={6}>
                  When you add products, they'll appear here.
                </Typography>
                <Button variant="contained" color="primary" onClick={closeCart} size="large">
                  Continue Shopping
                </Button>
              </Box>
            ) : (
              <List disablePadding>
                {cart.map(item => (
                  <ListItem key={item.id} disablePadding sx={{ flexDirection: 'column', alignItems: 'stretch', mb: 5 }}>
                    <Box display="flex" gap={3}>
                      <Box sx={{ width: 100, height: 100, borderRadius: 3, overflow: 'hidden', bgcolor: 'background.default', flexShrink: 0, border: '1px solid', borderColor: 'divider' }}>
                        <CardMedia component="img" image={item.image} alt={item.name} sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      </Box>
                      
                      <Box flexGrow={1} display="flex" flexDirection="column" justifyContent="space-between">
                        <Box display="flex" justifyContent="space-between" alignItems="flex-start">
                          <Box pr={2}>
                            <Typography variant="h6" color="text.primary" lineHeight={1.2} mb={1}>{item.name}</Typography>
                            <Typography variant="body2" color="text.secondary">₹{item.price.toLocaleString("en-IN")} each</Typography>
                          </Box>
                          <Typography variant="h6" color="text.primary">
                            ₹{(item.price * item.qty).toLocaleString("en-IN")}
                          </Typography>
                        </Box>
                        
                        <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
                          <Box display="flex" alignItems="center" gap={1} border="1px solid" borderColor="divider" borderRadius={2} p={0.5}>
                            <IconButton size="small" onClick={() => dispatch(decrementQty(item.id))}>
                              <RemoveIcon fontSize="small" />
                            </IconButton>
                            <Typography color="text.primary" minWidth={30} textAlign="center" fontWeight="600">{item.qty}</Typography>
                            <IconButton size="small" onClick={() => dispatch(addToCart(item))}>
                              <AddIcon fontSize="small" />
                            </IconButton>
                          </Box>

                          <IconButton color="error" onClick={() => dispatch(removeFromCart(item.id))} sx={{ '&:hover': { bgcolor: 'error.light', color: 'error.main' } }}>
                            <DeleteIcon />
                          </IconButton>
                        </Box>
                      </Box>
                    </Box>
                    <Divider sx={{ mt: 5 }} />
                  </ListItem>
                ))}
              </List>
            )}
          </Box>

          {cart.length > 0 && (
            <Box p={5} borderTop="1px solid" borderColor="divider" bgcolor="background.paper" sx={{ flexShrink: 0 }}>
              <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
                <Typography variant="h5" color="text.secondary">Total</Typography>
                <Typography variant="h3" color="text.primary">₹{total.toLocaleString("en-IN")}</Typography>
              </Box>
              <Button variant="contained" color="primary" fullWidth size="large" onClick={handleOrder} sx={{ mb: 2 }}>
                Checkout
              </Button>
              <Button variant="outlined" color="primary" fullWidth size="large" onClick={() => dispatch(clearCart())}>
                Clear Bag
              </Button>
            </Box>
          )}
        </Box>
      </Drawer>

      <Snackbar open={ordered} autoHideDuration={3000} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
        <Alert 
          icon={<CheckCircleIcon fontSize="large" />}
          severity="success" 
          sx={{ 
            bgcolor: 'text.primary', 
            color: 'background.default', 
            borderRadius: 4, 
            boxShadow: '0 20px 40px rgba(0,0,0,0.12)',
            border: '1px solid rgba(0,0,0,0.08)',
            p: 3,
            alignItems: 'center',
            '& .MuiAlert-icon': { color: '#10b981', mr: 2 }
          }}
        >
          <Typography variant="h6" fontWeight="700" gutterBottom>Order Confirmed</Typography>
          <Typography variant="body2" color="background.paper">Thank you for shopping with CUMart.</Typography>
        </Alert>
      </Snackbar>
    </>
  );
}

export default Cart;