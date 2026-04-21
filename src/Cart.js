import { useDispatch, useSelector } from "react-redux";
import { addToCart, decrementQty, removeFromCart, clearCart } from "./cartSlice";
import { useState } from "react";
import { Drawer, Box, Typography, IconButton, Button, Divider, List, ListItem, Snackbar, Alert, CardMedia } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

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
            width: { xs: '100%', sm: 480 },
          }
        }}
      >
        <Box p={4} pb={3} display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h4" color="text.primary">Your Bag</Typography>
          <IconButton onClick={closeCart} sx={{ bgcolor: 'rgba(0,0,0,0.04)' }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider />

        <Box flexGrow={1} overflow="auto" p={4}>
          {cart.length === 0 ? (
            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100%" sx={{ color: 'text.secondary' }}>
              <Typography variant="h1" mb={4} sx={{ opacity: 0.2 }}>🛍️</Typography>
              <Typography variant="h6" fontWeight="600" mb={1} color="text.primary">Your bag is empty.</Typography>
              <Typography variant="body2" textAlign="center">When you add products, they'll appear here.</Typography>
              <Button variant="contained" color="primary" onClick={closeCart} sx={{ mt: 4, borderRadius: '16px', px: 4 }}>
                Continue Shopping
              </Button>
            </Box>
          ) : (
            <List disablePadding>
              {cart.map(item => (
                <ListItem key={item.id} disablePadding sx={{ flexDirection: 'column', alignItems: 'stretch', mb: 4 }}>
                  <Box display="flex" gap={3}>
                    {/* Item Image */}
                    <Box sx={{ width: 80, height: 80, borderRadius: 3, overflow: 'hidden', bgcolor: '#f4f4f5', flexShrink: 0 }}>
                      <CardMedia component="img" image={item.image} alt={item.name} sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </Box>
                    
                    {/* Item Details */}
                    <Box flexGrow={1} display="flex" flexDirection="column" justifyContent="space-between">
                      <Box display="flex" justifyContent="space-between" alignItems="flex-start">
                        <Box>
                          <Typography variant="subtitle1" color="text.primary" fontWeight="700" lineHeight={1.2} mb={0.5}>{item.name}</Typography>
                          <Typography variant="body2" color="text.secondary">₹{item.price.toLocaleString("en-IN")}</Typography>
                        </Box>
                        <Typography variant="subtitle1" color="text.primary" fontWeight="800">
                          ₹{(item.price * item.qty).toLocaleString("en-IN")}
                        </Typography>
                      </Box>
                      
                      {/* Controls */}
                      <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
                        <Box display="flex" alignItems="center" bgcolor="#f4f4f5" borderRadius="8px" border="1px solid rgba(0,0,0,0.05)">
                          <IconButton size="small" onClick={() => dispatch(decrementQty(item.id))} sx={{ borderRadius: '8px' }}>
                            <RemoveIcon fontSize="small" />
                          </IconButton>
                          <Typography color="text.primary" minWidth={30} textAlign="center" fontWeight="600" fontSize="0.95rem">{item.qty}</Typography>
                          <IconButton size="small" onClick={() => dispatch(addToCart(item))} sx={{ borderRadius: '8px' }}>
                            <AddIcon fontSize="small" />
                          </IconButton>
                        </Box>

                        <IconButton size="small" color="error" onClick={() => dispatch(removeFromCart(item.id))} sx={{ color: '#ef4444', '&:hover': { bgcolor: 'rgba(239, 68, 68, 0.1)' } }}>
                          <DeleteOutlineIcon />
                        </IconButton>
                      </Box>
                    </Box>
                  </Box>
                  {/* Subtle separator between items */}
                  <Divider sx={{ mt: 4, borderColor: 'rgba(0,0,0,0.04)' }} />
                </ListItem>
              ))}
            </List>
          )}
        </Box>

        {cart.length > 0 && (
          <Box p={4} bgcolor="#fafafa" borderTop="1px solid rgba(0,0,0,0.06)">
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
              <Typography variant="h6" color="text.secondary" fontWeight="500">Subtotal</Typography>
              <Typography variant="h4" color="text.primary" fontWeight="800">₹{total.toLocaleString("en-IN")}</Typography>
            </Box>
            <Button variant="contained" color="primary" fullWidth size="large" onClick={handleOrder} sx={{ mb: 2, py: 2, borderRadius: '16px', fontSize: '1.1rem' }}>
              Checkout
            </Button>
            <Button variant="text" color="inherit" fullWidth onClick={() => dispatch(clearCart())} sx={{ py: 1.5, color: 'text.secondary' }}>
              Clear Bag
            </Button>
          </Box>
        )}
      </Drawer>

      <Snackbar open={ordered} autoHideDuration={3000} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <Alert 
          icon={<CheckCircleIcon fontSize="large" />}
          severity="success" 
          sx={{ 
            bgcolor: '#ffffff', 
            color: '#09090b', 
            borderRadius: '24px', 
            boxShadow: '0 20px 40px rgba(0,0,0,0.12)',
            border: '1px solid rgba(0,0,0,0.08)',
            p: 3,
            alignItems: 'center',
            '& .MuiAlert-icon': { color: '#10b981', mr: 2 }
          }}
        >
          <Typography variant="h6" fontWeight="700" gutterBottom>Order Confirmed</Typography>
          <Typography variant="body2" color="text.secondary">Thank you for shopping with CUMart.</Typography>
        </Alert>
      </Snackbar>
    </>
  );
}

export default Cart;
