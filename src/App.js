import React, { useContext, useState, useMemo, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import Login from "./Login";
import Products from "./Products";
import Cart from "./Cart";
import { AppBar, Toolbar, Typography, Box, IconButton, Avatar, Tooltip, Container, ThemeProvider, CssBaseline, Badge } from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';
import StorefrontIcon from '@mui/icons-material/Storefront';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { getTheme } from "./theme";
import { useSelector } from "react-redux";

function ThemeWrapper({ children }) {
  const [mode, setMode] = useState(() => {
    return localStorage.getItem('cumart-theme-mode') || 'light';
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
      <AppBar position="sticky" color="inherit" elevation={1}>
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
            {/* Logo */}
            <Box display="flex" alignItems="center" gap={1}>
              <StorefrontIcon color="primary" fontSize="large" />
              <Typography variant="h5" fontWeight="bold" color="primary">
                CUMart
              </Typography>
            </Box>

            {/* Actions */}
            <Box display="flex" alignItems="center" gap={2}>
              <IconButton onClick={toggleTheme} color="inherit">
                {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
              </IconButton>

              <IconButton onClick={() => setCartOpen(true)} color="inherit">
                <Badge badgeContent={cartCount} color="error">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>

              <Box display="flex" alignItems="center" gap={1} ml={1}>
                <Avatar sx={{ width: 32, height: 32, bgcolor: 'primary.main' }}>
                  {userName.charAt(0).toUpperCase()}
                </Avatar>
                <Typography variant="body1" sx={{ display: { xs: 'none', sm: 'block' } }}>
                  {userName}
                </Typography>
              </Box>
              
              <Tooltip title="Logout">
                <IconButton onClick={logout} color="error">
                  <LogoutIcon />
                </IconButton>
              </Tooltip>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Box component="main" sx={{ flexGrow: 1, py: 4 }}>
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