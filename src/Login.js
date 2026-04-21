import { useContext, useState } from "react";
import { AuthContext } from "./AuthContext";
import { Box, Card, Typography, TextField, Button, Alert, Container } from "@mui/material";
import StorefrontIcon from '@mui/icons-material/Storefront';

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
    <Container maxWidth="sm">
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', justifyContent: 'center', py: 4 }}>
        <Card sx={{ p: 4, boxShadow: 3, borderRadius: 2 }}>
          <Box display="flex" flexDirection="column" alignItems="center" mb={3}>
            <StorefrontIcon color="primary" sx={{ fontSize: 48, mb: 1 }} />
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              CUMart
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Sign in to your account
            </Typography>
          </Box>

          {error && <Alert severity="error" sx={{ mb: 3 }}>{error}</Alert>}

          <form onSubmit={handleSubmit}>
            <Box display="flex" flexDirection="column" gap={3}>
              <TextField
                label="Username"
                variant="outlined"
                fullWidth
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <TextField
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <Button type="submit" variant="contained" color="primary" size="large" fullWidth>
                Login
              </Button>
            </Box>
          </form>

          <Typography variant="body2" color="text.secondary" align="center" mt={3}>
            Demo Password: <strong>1234</strong>
          </Typography>
        </Card>
      </Box>
    </Container>
  );
}

export default Login;