import { useContext, useState } from "react";
import { AuthContext } from "./AuthContext";
import { Box, Card, Typography, TextField, Button, Alert } from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

function Login() {
  const { login } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const ok = login(name, password);
    if (!ok) {
      setError("Invalid password");
    }
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', p: 3 }}>
      <Card sx={{ maxWidth: 450, width: '100%', p: 5, borderRadius: 5, textAlign: 'center' }}>
        <Box display="flex" justifyContent="center" mb={4}>
          <Box sx={{ bgcolor: 'rgba(96, 165, 250, 0.1)', p: 2, borderRadius: '50%' }}>
            <LockOutlinedIcon color="primary" sx={{ fontSize: 36 }} />
          </Box>
        </Box>
        
        <Typography variant="h3" color="white" gutterBottom fontWeight="800">
          CUMart
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={5}>
          Login to continue your campus shopping
        </Typography>

        {error && (
          <Alert severity="error" sx={{ mb: 4, borderRadius: 2 }}>
            {error}
          </Alert>
        )}

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
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              size="large"
              sx={{ mt: 2, py: 1.8, fontSize: '1.05rem' }}
            >
              Sign In
            </Button>
          </Box>
        </form>

        <Typography variant="caption" color="text.secondary" display="block" mt={4}>
          Hint: Password is 1234
        </Typography>
      </Card>
    </Box>
  );
}

export default Login;
