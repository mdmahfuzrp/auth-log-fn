import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Avatar,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getFirstChar } from "../../lib/fn";
import { login } from "../../features/auth/authSlice";

// Import the JSON data directly
import fakeData from "../../Data/fakeData.json";

const LoginForm = ({ role }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    emailOrPhone: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // Filter users by role
    const user = fakeData.users.find(
      (u) =>
        (u.email === formData.emailOrPhone ||
          u.phone === formData.emailOrPhone) &&
        u.password === formData.password
    );

    if (!user) {
      setError("Invalid credentials");
      return;
    }

    if (user.role !== role) {
      setError(`This is a ${role} login. Use your ${role} credentials.`);
      return;
    }

    // Dispatch login
    dispatch(
      login({
        token: user.token,
        role: user.role,
        user: user,
      })
    );

    // Redirect to dashboard
    navigate(`/dashboard/${user.role}`);
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      width={"100%"}
    >
      <Paper
        elevation={3}
        sx={{
          p: 4,
          borderRadius: 4,
          width: "100%",
          maxWidth: 400,
          textAlign: "center",
          backdropFilter: "blur(1px)",
          background: "rgba(255, 255, 255, 1)",
        }}
      >
        <Avatar
          sx={{
            bgcolor: "#e57482ff",
            mx: "auto",
            mb: 2,
            width: 56,
            height: 56,
            textTransform: "uppercase",
          }}
        >
          {getFirstChar(role)}
        </Avatar>
        <Typography
          variant="h5"
          fontWeight="bold"
          gutterBottom
          color={"#e57482ff"}
          textTransform={"capitalize"}
        >
          {role} Login
        </Typography>

        <Box component="form" onSubmit={handleSubmit} noValidate>
          <TextField
            margin="normal"
            fullWidth
            label="Email or Phone"
            name="emailOrPhone"
            value={formData.emailOrPhone}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            fullWidth
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
          />

          {error && (
            <Typography color="error" variant="body2" mt={1}>
              {error}
            </Typography>
          )}

          <Button
            type="submit"
            fullWidth
            variant="contained"
            size="large"
            sx={{
              mt: 3,
              borderRadius: 2,
              fontWeight: "bold",
              background: "#e57482ff",
              "&:hover": {
                background: "#dd606eff",
              },
            }}
          >
            Login
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default LoginForm;
