import { useDispatch, useSelector } from "react-redux";
import { addToCart, decrementQty, removeFromCart, clearCart } from "./cartSlice";
import { useState } from "react";
import { Drawer, Box, Typography, IconButton, Button, Divider, List, ListItem, Snackbar, Alert, CardMedia } from "@mui/material";
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
      <Drawer anchor="right" open={isOpen} onClose={closeCart}>
        <Box sx={{ width: { xs: '100vw', sm: 400 }, display: 'flex', flexDirection: 'column', height: '100%' }}>
          <Box p={2} display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h6" fontWeight="bold">Your Cart</Typography>
            <IconButton onClick={closeCart}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Divider />

          <Box flexGrow={1} overflow="auto" p={2}>
            {cart.length === 0 ? (
              <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100%">
                <Typography variant="body1" color="text.secondary">Your cart is empty.</Typography>
                <Button variant="outlined" sx={{ mt: 2 }} onClick={closeCart}>Continue Shopping</Button>
              </Box>
            ) : (
              <List disablePadding>
                {cart.map(item => (
                  <ListItem key={item.id} disablePadding sx={{ mb: 2 }}>
                    <Box display="flex" width="100%" gap={2} border="1px solid" borderColor="divider" p={2} borderRadius={2}>
                      <CardMedia 
                        component="img" 
                        image={item.image} 
                        sx={{ width: 80, height: 80, borderRadius: 1, objectFit: 'cover' }} 
                      />
                      <Box flexGrow={1} display="flex" flexDirection="column" justifyContent="space-between">
                        <Box display="flex" justifyContent="space-between">
                          <Typography variant="subtitle1" fontWeight="bold">{item.name}</Typography>
                          <IconButton size="small" color="error" onClick={() => dispatch(removeFromCart(item.id))}>
                            <DeleteIcon />
                          </IconButton>
                        </Box>
                        <Box display="flex" justifyContent="space-between" alignItems="center">
                          <Typography variant="body1" color="primary" fontWeight="bold">
                            ₹{(item.price * item.qty).toLocaleString("en-IN")}
                          </Typography>
                          <Box display="flex" alignItems="center" border="1px solid" borderColor="divider" borderRadius={1}>
                            <IconButton size="small" onClick={() => dispatch(decrementQty(item.id))}>
                              <RemoveIcon fontSize="small" />
                            </IconButton>
                            <Typography sx={{ px: 1 }}>{item.qty}</Typography>
                            <IconButton size="small" onClick={() => dispatch(addToCart(item))}>
                              <AddIcon fontSize="small" />
                            </IconButton>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </ListItem>
                ))}
              </List>
            )}
          </Box>

          {cart.length > 0 && (
            <Box p={2} borderTop="1px solid" borderColor="divider">
              <Box display="flex" justifyContent="space-between" mb={2}>
                <Typography variant="h6">Total</Typography>
                <Typography variant="h6" fontWeight="bold">₹{total.toLocaleString("en-IN")}</Typography>
              </Box>
              <Button variant="contained" color="primary" fullWidth size="large" onClick={handleOrder} sx={{ mb: 1 }}>
                Checkout
              </Button>
              <Button variant="outlined" color="error" fullWidth onClick={() => dispatch(clearCart())}>
                Clear Cart
              </Button>
            </Box>
          )}
        </Box>
      </Drawer>

      <Snackbar open={ordered} autoHideDuration={3000} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
        <Alert severity="success" variant="filled">
          Order placed successfully!
        </Alert>
      </Snackbar>
    </>
  );
}

export default Cart;