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
            width: { xs: '100%', sm: 400 },
            bgcolor: 'rgba(5, 8, 15, 0.95)',
            backdropFilter: 'blur(24px)',
            borderLeft: '1px solid rgba(255,255,255,0.05)'
          }
        }}
      >
        <Box p={3} display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h5" color="white" fontWeight="700">Your Cart</Typography>
          <IconButton onClick={closeCart} sx={{ color: 'text.secondary' }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider sx={{ borderColor: 'rgba(255,255,255,0.05)' }} />

        <Box flexGrow={1} overflow="auto" p={3}>
          {cart.length === 0 ? (
            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100%" opacity={0.5}>
              <Typography variant="h2" mb={2}>🛒</Typography>
              <Typography variant="h6" color="text.secondary">Your cart is empty</Typography>
            </Box>
          ) : (
            <List disablePadding>
              {cart.map(item => (
                <ListItem key={item.id} disablePadding sx={{ flexDirection: 'column', alignItems: 'stretch', mb: 3 }}>
                  <Box display="flex" justifyContent="space-between" mb={1}>
                    <Typography variant="subtitle1" color="white" fontWeight="600">{item.name}</Typography>
                    <Typography variant="subtitle1" color="primary.light" fontWeight="bold">₹{item.price * item.qty}</Typography>
                  </Box>
                  <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography variant="body2" color="text.secondary">₹{item.price} each</Typography>
                    
                    <Box display="flex" alignItems="center" gap={1} bgcolor="rgba(255,255,255,0.05)" borderRadius={2} p={0.5}>
                      <IconButton size="small" onClick={() => dispatch(decrementQty(item.id))} color="primary">
                        <RemoveIcon fontSize="small" />
                      </IconButton>
                      <Typography color="white" minWidth={20} textAlign="center">{item.qty}</Typography>
                      <IconButton size="small" onClick={() => dispatch(addToCart(item))} color="primary">
                        <AddIcon fontSize="small" />
                      </IconButton>
                    </Box>

                    <IconButton size="small" color="error" onClick={() => dispatch(removeFromCart(item.id))}>
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  </Box>
                </ListItem>
              ))}
            </List>
          )}
        </Box>

        {cart.length > 0 && (
          <Box p={3} borderTop="1px solid rgba(255,255,255,0.05)" bgcolor="rgba(0,0,0,0.2)">
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
              <Typography variant="h6" color="text.secondary">Total</Typography>
              <Typography variant="h4" color="white" fontWeight="700">₹{total}</Typography>
            </Box>
            <Button variant="contained" color="primary" fullWidth size="large" onClick={handleOrder} sx={{ mb: 2 }}>
              Place Order
            </Button>
            <Button variant="outlined" color="error" fullWidth onClick={() => dispatch(clearCart())}>
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
