import React, { useContext, useState, useMemo, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import Login from "./Login";
import Products from "./Products";
import Cart from "./Cart";
import { AppBar, Toolbar, Typography, Box, IconButton, Avatar, Tooltip, Container, ThemeProvider, CssBaseline, Badge } from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { getTheme } from "./theme";
import { useSelector } from "react-redux";

function ThemeWrapper({ children }) {
  const [mode, setMode] = useState(() => {
    return localStorage.getItem('cumart-theme-mode') || 'dark'; // Defaulting to dark as requested
  });

  useEffect(() => {
    localStorage.setItem('cumart-theme-mode', mode);
  }, [mode]);

  const toggleTheme = () => setMode((m) => (m === 'light' ? 'dark' : 'light'));
  const theme = useMemo(() => getTheme(mode), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {React.cloneElement(children, { toggleTheme, mode })}
    </ThemeProvider>
  );
}

function AppContent({ toggleTheme, mode }) {
  const { isLoggedIn, userName, logout } = useContext(AuthContext);
  const [cartOpen, setCartOpen] = useState(false);
  const cartCount = useSelector(state => state.cart.reduce((sum, i) => sum + i.qty, 0));

  if (!isLoggedIn) return <Login />;

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar position="sticky">
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
            <Box display="flex" alignItems="center" gap={1.5}>
              <Box sx={{ bgcolor: 'text.primary', color: 'background.default', p: 1, borderRadius: 3, display: 'flex' }}>
                <ShoppingBagOutlinedIcon />
              </Box>
              <Typography variant="h4" color="text.primary">
                CUMart.
              </Typography>
            </Box>

            <Box display="flex" alignItems="center" gap={3}>
              <Tooltip title="Toggle Theme">
                <IconButton onClick={toggleTheme}>
                  {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
                </IconButton>
              </Tooltip>

              <Tooltip title="View Cart">
                <IconButton onClick={() => setCartOpen(true)}>
                  <Badge badgeContent={cartCount} color="error">
                    <ShoppingCartIcon />
                  </Badge>
                </IconButton>
              </Tooltip>

              <Box display="flex" alignItems="center" gap={1.5} sx={{ display: { xs: 'none', sm: 'flex' }, py: 0.5, px: 2, bgcolor: 'action.hover', borderRadius: '50px', border: '1px solid', borderColor: 'divider', height: 44 }}>
                <Avatar sx={{ bgcolor: 'text.primary', color: 'background.default', width: 28, height: 28, fontSize: '0.85rem', fontWeight: 700 }}>
                  {userName.charAt(0).toUpperCase()}
                </Avatar>
                <Typography variant="body2" fontWeight="600" color="text.primary" sx={{ display: 'flex', alignItems: 'center', height: '100%', mt: '2px' }}>
                  {userName}
                </Typography>
              </Box>              
              <Tooltip title="Sign Out">
                <IconButton onClick={logout} sx={{ color: 'text.secondary', '&:hover': { color: 'error.main', bgcolor: 'error.light' } }}>
                  <LogoutIcon />
                </IconButton>
              </Tooltip>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Box component="main" sx={{ flexGrow: 1, py: 8 }}>
        <Container maxWidth="xl">
          <Products openCart={() => setCartOpen(true)} />
        </Container>
      </Box>

      <Cart isOpen={cartOpen} closeCart={() => setCartOpen(false)} />
    </Box>
  );
}

export default function App() {
  return (
    <ThemeWrapper>
      <AppContent />
    </ThemeWrapper>
  );
}