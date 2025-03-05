import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
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
  Alert,
} from "@mui/material";

const Signup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ firstName: "", lastName: "", email: "", password: "", role: "freelancer" });
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await axios.post("http://localhost:5000/api/signup", user);
      navigate("/login");
    } catch (err) {
      setError("Registration failed. Try again.");
    }
  };

  return (
    <Grid container justifyContent="center" alignItems="center" sx={{ height: "100vh", backgroundColor: "#f4f4f4" }}>
      <Paper elevation={3} sx={{ padding: 4, maxWidth: 400, textAlign: "center" }}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Join Mindlancer
        </Typography>

        {/* Show error message */}
        {error && <Alert severity="error">{error}</Alert>}

        <Divider sx={{ my: 2 }}>or</Divider>

        {/* Signup Form */}
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="First Name"
            variant="outlined"
            margin="normal"
            value={user.firstName}
            onChange={(e) => setUser({ ...user, firstName: e.target.value })}
            required
          />
          <TextField
            fullWidth
            label="Last Name"
            variant="outlined"
            margin="normal"
            value={user.lastName}
            onChange={(e) => setUser({ ...user, lastName: e.target.value })}
            required
          />
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            margin="normal"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            required
          />
          <TextField
            fullWidth
            type="password"
            label="Password"
            variant="outlined"
            margin="normal"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            required
          />
          <FormControlLabel control={<Checkbox color="primary" required />} label="I agree to the terms" sx={{ mt: 1, mb: 2 }} />
          <Button type="submit" variant="contained" fullWidth sx={{ backgroundColor: "#28a745" }}>
            Sign Up
          </Button>
        </form>

        {/* Login Link */}
        <Typography variant="body2" sx={{ mt: 2 }}>
          Already have an account?{" "}
          <Link component="button" onClick={() => navigate("/login")} sx={{ color: "#007bff" }}>
            Log in
          </Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Signup;
