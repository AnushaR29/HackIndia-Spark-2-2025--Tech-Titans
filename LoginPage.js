import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Button,
  TextField,
  Checkbox,
  FormControlLabel,
  Typography,
  Paper,
  Box,
  Grid,
  Divider,
  Link,
  Alert
} from "@mui/material";
import { Google, Facebook } from "@mui/icons-material"; // Icons for social login

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post("http://localhost:5000/api/login", { email, password });
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role);

      // Redirect based on role
      if (res.data.role === "freelancer") {
        navigate("/freelancer-dashboard");
      } else {
        navigate("/business-dashboard");
      }
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <Grid container justifyContent="center" alignItems="center" sx={{ height: "100vh", backgroundColor: "#f4f4f4" }}>
      <Paper elevation={3} sx={{ padding: 4, maxWidth: 400, textAlign: "center" }}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Welcome Back
        </Typography>

        {/* Show error message */}
        {error && <Alert severity="error">{error}</Alert>}

        {/* Social Login Buttons */}
        <Box display="flex" flexDirection="column" gap={2} mb={2}>
          <Button variant="contained" startIcon={<Google />} sx={{ backgroundColor: "#4285f4", color: "#fff" }}>
            Continue with Google
          </Button>
          <Button variant="contained" startIcon={<Facebook />} sx={{ backgroundColor: "#3b5998", color: "#fff" }}>
            Continue with Facebook
          </Button>
        </Box>

        <Divider sx={{ my: 2 }}>or</Divider>

        {/* Login Form */}
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            fullWidth
            type="password"
            label="Password"
            variant="outlined"
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <FormControlLabel control={<Checkbox color="primary" />} label="Remember me" sx={{ mt: 1, mb: 2 }} />
          <Button type="submit" variant="contained" fullWidth sx={{ backgroundColor: "#28a745" }}>
            Log In
          </Button>
        </form>

        {/* Sign-up Link */}
        <Typography variant="body2" sx={{ mt: 2 }}>
          Don't have an account?{" "}
          <Link component="button" onClick={() => navigate("/signup")} sx={{ color: "#007bff" }}>
            Sign up
          </Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default LoginPage;
