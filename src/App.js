import { useContext, useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import Login from "./Login";
import Products from "./Products";
import Cart from "./Cart";
import { AppBar, Toolbar, Typography, Box, IconButton, Avatar, Tooltip, Container } from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';
import StorefrontIcon from '@mui/icons-material/Storefront';

function App() {
  const { isLoggedIn, userName, logout } = useContext(AuthContext);
  const [cartOpen, setCartOpen] = useState(false);

  if (!isLoggedIn) {
    return <Login />;
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar position="sticky">
        <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, sm: 5 }, py: 1.5 }}>
          <Box display="flex" alignItems="center" gap={2}>
            <Avatar sx={{ bgcolor: 'rgba(96, 165, 250, 0.15)', color: 'primary.light', width: 48, height: 48 }}>
              <StorefrontIcon />
            </Avatar>
            <Box>
              <Typography variant="h5" fontWeight="800" color="white" lineHeight={1.2}>
                CU<span style={{ color: '#60a5fa' }}>Mart</span>
              </Typography>
              <Typography variant="caption" color="text.secondary" fontWeight="bold">
                Campus Shopping Hub
              </Typography>
            </Box>
          </Box>

          <Box display="flex" alignItems="center" gap={4}>
            <Box display="flex" alignItems="center" gap={2} sx={{ display: { xs: 'none', sm: 'flex' } }}>
              <Avatar sx={{ bgcolor: 'primary.main', width: 36, height: 36, fontSize: '1.1rem', fontWeight: 'bold' }}>
                {userName.charAt(0).toUpperCase()}
              </Avatar>
              <Typography variant="body1" fontWeight="600" color="white">
                {userName}
              </Typography>
            </Box>
            
            <Tooltip title="Logout">
              <IconButton onClick={logout} sx={{ bgcolor: 'rgba(248, 113, 113, 0.1)', color: 'error.light', '&:hover': { bgcolor: 'rgba(248, 113, 113, 0.2)' } }}>
                <LogoutIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>

      <Box component="main" sx={{ flexGrow: 1, p: { xs: 3, sm: 6 }, mt: 3, mb: 8 }}>
        <Container maxWidth="xl">
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
