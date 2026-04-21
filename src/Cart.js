import { useDispatch, useSelector } from "react-redux";
import { addToCart, decrementQty, removeFromCart, clearCart } from "./cartSlice";
import { useState } from "react";
import { Drawer, Box, Typography, IconButton, Button, Divider, List, ListItem, Snackbar, Alert } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';

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
    }, 2000);
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
            bgcolor: 'rgba(11, 15, 25, 0.95)',
            backdropFilter: 'blur(30px)',
            borderLeft: '1px solid rgba(255,255,255,0.08)'
          }
        }}
      >
        <Box p={4} display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h4" color="white" fontWeight="800">Your Cart</Typography>
          <IconButton onClick={closeCart} sx={{ color: 'text.secondary', '&:hover': { color: 'white', bgcolor: 'rgba(255,255,255,0.1)' } }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider sx={{ borderColor: 'rgba(255,255,255,0.08)' }} />

        <Box flexGrow={1} overflow="auto" p={4}>
          {cart.length === 0 ? (
            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100%" opacity={0.6}>
              <Typography variant="h1" mb={3}>🛒</Typography>
              <Typography variant="h5" color="text.secondary" fontWeight="600">Your cart is empty</Typography>
            </Box>
          ) : (
            <List disablePadding>
              {cart.map(item => (
                <ListItem key={item.id} disablePadding sx={{ flexDirection: 'column', alignItems: 'stretch', mb: 4, p: 3, bgcolor: 'rgba(255,255,255,0.02)', borderRadius: 3, border: '1px solid rgba(255,255,255,0.05)' }}>
                  <Box display="flex" justifyContent="space-between" mb={2}>
                    <Typography variant="h6" color="white" fontWeight="700">{item.name}</Typography>
                    <Typography variant="h6" color="primary.light" fontWeight="800">₹{(item.price * item.qty).toLocaleString("en-IN")}</Typography>
                  </Box>
                  <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography variant="body1" color="text.secondary">₹{item.price.toLocaleString("en-IN")} each</Typography>
                    
                    <Box display="flex" alignItems="center" gap={1.5} bgcolor="rgba(0,0,0,0.3)" borderRadius={3} p={0.5} border="1px solid rgba(255,255,255,0.05)">
                      <IconButton size="small" onClick={() => dispatch(decrementQty(item.id))} color="primary" sx={{ bgcolor: 'rgba(96, 165, 250, 0.1)' }}>
                        <RemoveIcon fontSize="small" />
                      </IconButton>
                      <Typography color="white" minWidth={24} textAlign="center" fontWeight="bold" fontSize="1.1rem">{item.qty}</Typography>
                      <IconButton size="small" onClick={() => dispatch(addToCart(item))} color="primary" sx={{ bgcolor: 'rgba(96, 165, 250, 0.1)' }}>
                        <AddIcon fontSize="small" />
                      </IconButton>
                    </Box>

                    <IconButton size="small" color="error" onClick={() => dispatch(removeFromCart(item.id))} sx={{ bgcolor: 'rgba(248, 113, 113, 0.1)', '&:hover': { bgcolor: 'rgba(248, 113, 113, 0.2)' } }}>
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  </Box>
                </ListItem>
              ))}
            </List>
          )}
        </Box>

        {cart.length > 0 && (
          <Box p={4} borderTop="1px solid rgba(255,255,255,0.08)" bgcolor="rgba(15, 22, 38, 0.8)">
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
              <Typography variant="h5" color="text.secondary">Total</Typography>
              <Typography variant="h3" color="white" fontWeight="800">₹{total.toLocaleString("en-IN")}</Typography>
            </Box>
            <Button variant="contained" color="primary" fullWidth size="large" onClick={handleOrder} sx={{ mb: 2, py: 1.8, fontSize: '1.1rem' }}>
              Place Order
            </Button>
            <Button variant="outlined" color="error" fullWidth onClick={() => dispatch(clearCart())} sx={{ py: 1.5, fontSize: '1rem' }}>
              Clear Cart
            </Button>
          </Box>
        )}
      </Drawer>

      <Snackbar open={ordered} autoHideDuration={3000} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
        <Alert severity="success" variant="filled" sx={{ borderRadius: 2 }}>
          Order placed successfully! Thank you.
        </Alert>
      </Snackbar>
    </>
  );
}

export default Cart;
