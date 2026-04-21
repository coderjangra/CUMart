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
    const saved = localStorage.getItem('cumart-theme-mode');
    return saved ? saved : 'light';
  });

  useEffect(() => {
    localStorage.setItem('cumart-theme-mode', mode);
  }, [mode]);

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

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

  if (!isLoggedIn) {
    return <Login />;
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: 'background.default' }}>
      <AppBar position="sticky" sx={{ pt: 1, pb: 0.5, bgcolor: 'background.paper', borderBottom: '1px solid', borderColor: 'divider' }}>
        <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, sm: 4, md: 8 }, py: 1.5 }}>
          {/* Logo Area */}
          <Box display="flex" alignItems="center" gap={2}>
            <Box sx={{ bgcolor: 'primary.main', color: 'primary.contrastText', p: 1.2, borderRadius: '14px', display: 'flex' }}>
              <ShoppingBagOutlinedIcon />
            </Box>
            <Typography variant="h4" fontWeight="800" color="text.primary" letterSpacing="-0.04em">
              CUMart.
            </Typography>
          </Box>

          {/* User Profile / Actions */}
          <Box display="flex" alignItems="center" gap={3}>
            <Tooltip title="Toggle Theme">
              <IconButton onClick={toggleTheme} sx={{ border: '1px solid', borderColor: 'divider', color: 'text.primary', '&:hover': { bgcolor: 'action.hover' } }}>
                {mode === 'dark' ? <LightModeIcon fontSize="small" /> : <DarkModeIcon fontSize="small" />}
              </IconButton>
            </Tooltip>

            <Tooltip title="View Cart">
              <IconButton onClick={() => setCartOpen(true)} sx={{ border: '1px solid', borderColor: 'divider', color: 'text.primary', '&:hover': { bgcolor: 'action.hover' } }}>
                <Badge badgeContent={cartCount} color="error">
                  <ShoppingCartIcon fontSize="small" />
                </Badge>
              </IconButton>
            </Tooltip>

            <Box display="flex" alignItems="center" gap={1.5} sx={{ display: { xs: 'none', sm: 'flex' }, py: 0.5, px: 2, bgcolor: 'background.default', borderRadius: '50px', border: '1px solid', borderColor: 'divider' }}>
              <Avatar sx={{ bgcolor: 'primary.main', color: 'primary.contrastText', width: 32, height: 32, fontSize: '1rem', fontWeight: 'bold' }}>
                {userName.charAt(0).toUpperCase()}
              </Avatar>
              <Typography variant="body2" fontWeight="600" color="text.primary" sx={{ mr: 1 }}>
                {userName}
              </Typography>
            </Box>
            
            <Tooltip title="Sign Out">
              <IconButton onClick={logout} sx={{ bgcolor: 'background.default', border: '1px solid', borderColor: 'divider', color: 'text.secondary', '&:hover': { color: 'error.main', borderColor: 'error.main', bgcolor: 'error.light' } }}>
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

export default function App() {
  return (
    <ThemeWrapper>
      <AppContent />
    </ThemeWrapper>
  );
}