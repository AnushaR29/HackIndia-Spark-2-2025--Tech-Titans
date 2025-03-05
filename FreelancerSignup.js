import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  Grid,
  Checkbox,
  FormControlLabel,
  Paper,
  Divider,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";

const FreelancerSignup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/))
      newErrors.email = "Invalid email address";
    if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters";
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords do not match";
    if (!formData.agreeTerms) newErrors.agreeTerms = "You must agree to the terms";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    console.log("Freelancer Signup Data:", formData);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} sx={{ padding: 4, mt: 5, borderRadius: 3, textAlign: "center" }}>
        <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
          Welcome to Freelancer Signup
        </Typography>

        {/* Google & Facebook Signup Buttons */}
        <Button
          fullWidth
          variant="contained"
          startIcon={<GoogleIcon />}
          sx={{ backgroundColor: "#4285F4", color: "#fff", mb: 1 }}
        >
          Continue with Google
        </Button>
        <Button
          fullWidth
          variant="contained"
          startIcon={<FacebookIcon />}
          sx={{ backgroundColor: "#1877F2", color: "#fff", mb: 2 }}
        >
          Continue with Facebook
        </Button>

        <Divider sx={{ my: 2 }}>or</Divider>

        {/* Signup Form */}
        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Email or Username"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
            required
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            error={!!errors.password}
            helperText={errors.password}
            required
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword}
            required
            sx={{ mb: 2 }}
          />

          {/* Remember Me Checkbox */}
          <FormControlLabel
            control={<Checkbox name="agreeTerms" checked={formData.agreeTerms} onChange={handleChange} />}
            label="I agree to the terms and conditions"
          />
          {errors.agreeTerms && <Typography color="error" variant="body2">{errors.agreeTerms}</Typography>}

          {/* Signup Button */}
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 2, backgroundColor: "#28A745", color: "#fff" }}>
            Sign Up
          </Button>
        </Box>

        {/* Footer Link */}
        <Typography variant="body2" sx={{ mt: 2 }}>
          Already have an account?{" "}
          <Button color="primary" onClick={() => navigate("/login")}>
            Log in
          </Button>
        </Typography>
      </Paper>
    </Container>
  );
};

export default FreelancerSignup;
