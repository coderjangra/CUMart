import React, { useContext, useState } from "react";
import { AuthContext } from "./AuthContext";
import { Box, Card, Typography, TextField, Button, Alert, Container, CircularProgress } from "@mui/material";

function Login() {
  const { login } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      const ok = login(name, password);
      if (!ok) {
        setError("Incorrect password. Please try again.");
      }
      setLoading(false);
    }, 800);
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: 'background.default' }}>
      <Box sx={{ flex: 1, display: { xs: 'none', lg: 'flex' }, bgcolor: '#000', position: 'relative', overflow: 'hidden', alignItems: 'center', justifyContent: 'center' }}>
        <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.6, backgroundImage: 'url(https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2070&auto=format&fit=crop)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <Box sx={{ zIndex: 1, textAlign: 'center', p: 8 }}>
          <Typography variant="h2" color="white" mb={3}>
            CUMart.
          </Typography>
          <Typography variant="h6" color="rgba(255,255,255,0.7)" sx={{ maxWidth: 400, mx: 'auto', fontWeight: 500 }}>
            The premium shopping destination for the modern campus ecosystem.
          </Typography>
        </Box>
      </Box>

      <Box sx={{ flex: { xs: 1, lg: '0 0 600px' }, display: 'flex', flexDirection: 'column', justifyContent: 'center', px: { xs: 4, sm: 8, md: 12 }, py: 8, bgcolor: 'background.paper', zIndex: 2 }}>
        <Box sx={{ maxWidth: 400, width: '100%', mx: 'auto' }}>
          <Typography variant="h3" color="text.primary" mb={2}>
            Welcome back
          </Typography>
          <Typography variant="body1" color="text.secondary" mb={6}>
            Please enter your details to sign in to your account.
          </Typography>

          {error && (
            <Alert severity="error" sx={{ mb: 4, borderRadius: 3 }}>
              {error}
            </Alert>
          )}

          <form onSubmit={handleSubmit}>
            <Box display="flex" flexDirection="column" gap={3}>
              <Box>
                <Typography variant="subtitle2" color="text.primary" mb={1} display="block">
                  Username
                </Typography>
                <TextField
                  placeholder="Enter your username"
                  variant="outlined"
                  fullWidth
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </Box>
              <Box>
                <Typography variant="subtitle2" color="text.primary" mb={1} display="block">
                  Password
                </Typography>
                <TextField
                  placeholder="Enter your password"
                  type="password"
                  variant="outlined"
                  fullWidth
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Box>

              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                size="large"
                disabled={loading}
                sx={{ mt: 2 }}
              >
                {loading ? <CircularProgress size={24} color="inherit" /> : 'Sign In'}
              </Button>
            </Box>
          </form>

          <Box mt={6} pt={6} borderTop="1px solid" borderColor="divider" textAlign="center">
            <Typography variant="body2" color="text.secondary">
              Demo Access: Use any username with password <strong style={{ color: 'text.primary' }}>1234</strong>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Login;
