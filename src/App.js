import { useContext, useState } from "react";
import { AuthContext } from "./AuthContext";
import Login from "./Login";
import Products from "./Products";
import Cart from "./Cart";
import { AppBar, Toolbar, Typography, Box, IconButton, Avatar, Tooltip, Container } from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

function App() {
  const { isLoggedIn, userName, logout } = useContext(AuthContext);
  const [cartOpen, setCartOpen] = useState(false);

  if (!isLoggedIn) {
    return <Login />;
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar position="sticky" sx={{ pt: 1, pb: 0.5 }}>
        <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 3, sm: 6, md: 8 } }}>
          {/* Logo Area */}
          <Box display="flex" alignItems="center" gap={2}>
            <Box sx={{ bgcolor: '#09090b', color: 'white', p: 1.2, borderRadius: '14px', display: 'flex' }}>
              <ShoppingBagOutlinedIcon />
            </Box>
            <Typography variant="h4" fontWeight="800" color="text.primary" letterSpacing="-0.04em">
              CUMart.
            </Typography>
          </Box>

          {/* User Profile / Actions */}
          <Box display="flex" alignItems="center" gap={4}>
            <Box display="flex" alignItems="center" gap={2} sx={{ display: { xs: 'none', sm: 'flex' }, py: 0.5, px: 2, bgcolor: '#f4f4f5', borderRadius: '50px' }}>
              <Avatar sx={{ bgcolor: '#09090b', width: 28, height: 28, fontSize: '0.85rem', fontWeight: 'bold' }}>
                {userName.charAt(0).toUpperCase()}
              </Avatar>
              <Typography variant="body2" fontWeight="600" color="text.primary">
                {userName}
              </Typography>
            </Box>
            
            <Tooltip title="Sign Out">
              <IconButton onClick={logout} sx={{ bgcolor: '#ffffff', border: '1px solid rgba(0,0,0,0.1)', color: 'text.secondary', '&:hover': { color: '#ef4444', borderColor: '#ef4444', bgcolor: '#fef2f2' } }}>
                <LogoutIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>

      <Box component="main" sx={{ flexGrow: 1, pt: 6, pb: 12 }}>
        <Container maxWidth="xl" sx={{ px: { xs: 3, sm: 6, md: 8 } }}>
          <Products openCart={() => setCartOpen(true)} />
        </Container>
      </Box>

      <Cart
        isOpen={cartOpen}
        closeCart={() => setCartOpen(false)}
      />
    </Box>
  );
}

export default App;
