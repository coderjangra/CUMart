import { useContext, useState } from "react";
import { AuthContext } from "./AuthContext";
import { Box, Card, Typography, TextField, Button, Alert, Divider } from "@mui/material";

function Login() {
  const { login } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const ok = login(name, password);
    if (!ok) {
      setError("Incorrect password. Please try again.");
    }
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: '#fafafa' }}>
      {/* Left side - Branding/Image (Hidden on small screens) */}
      <Box sx={{ flex: 1, display: { xs: 'none', lg: 'flex' }, bgcolor: '#09090b', position: 'relative', overflow: 'hidden', alignItems: 'center', justifyContent: 'center' }}>
        <Box sx={{ position: 'absolute', top: 0, left: 0, w: '100%', h: '100%', opacity: 0.4, backgroundImage: 'url(https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2070&auto=format&fit=crop)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <Box sx={{ zIndex: 1, textAlign: 'center', p: 8 }}>
          <Typography variant="h1" color="white" fontWeight="800" letterSpacing="-0.05em" mb={3}>
            CUMart.
          </Typography>
          <Typography variant="h5" color="rgba(255,255,255,0.7)" fontWeight="500" sx={{ maxWidth: 400, mx: 'auto', lineHeight: 1.6 }}>
            The premium shopping destination for the modern campus ecosystem.
          </Typography>
        </Box>
      </Box>

      {/* Right side - Login Form */}
      <Box sx={{ flex: { xs: 1, lg: '0 0 600px' }, display: 'flex', flexDirection: 'column', justifyContent: 'center', px: { xs: 4, sm: 8, md: 12 }, py: 8, bgcolor: '#ffffff', boxShadow: '-20px 0 40px rgba(0,0,0,0.03)', zIndex: 2 }}>
        
        <Typography variant="h3" color="text.primary" mb={2}>
          Welcome back
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={6}>
          Please enter your details to sign in to your account.
        </Typography>

        {error && (
          <Alert severity="error" sx={{ mb: 4, borderRadius: 2 }}>
            {error}
          </Alert>
        )}

        <form onSubmit={handleSubmit}>
          <Box display="flex" flexDirection="column" gap={3}>
            <Box>
              <Typography variant="caption" color="text.primary" fontWeight="600" mb={1} display="block">
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
              <Typography variant="caption" color="text.primary" fontWeight="600" mb={1} display="block">
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
              sx={{ mt: 4, py: 2, borderRadius: '12px', fontSize: '1.05rem' }}
            >
              Sign In
            </Button>
          </Box>
        </form>

        <Box mt={6} pt={6} borderTop="1px solid rgba(0,0,0,0.06)" textAlign="center">
          <Typography variant="body2" color="text.secondary">
            Demo Access: Use any username with password <strong style={{ color: '#09090b' }}>1234</strong>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Login;
