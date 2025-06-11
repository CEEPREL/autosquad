"use client";
import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  Link,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (!email) return alert("Please enter your email.");
    // Handle newsletter subscription logic here
    alert(`Subscribed with ${email}`);
    setEmail("");
  };

  return (
    <Box
      className="min-h-[20vh]"
      id="footer"
      component="footer"
      sx={{
        bgcolor: "#121212",
        py: 6,
        px: { xs: 3, sm: 10 },

        textAlign: "center",
        borderTop: "1px solid #333",
        color: "#eee",
      }}
    >
      <Typography variant="h6" gutterBottom sx={{ color: "#fff" }}>
        Stay Connected
      </Typography>

      {/* Social Media Icons */}
      <Box sx={{ mb: 3 }}>
        <Link
          href="https://www.facebook.com/share/16Ua2cnsmG/"
          target="_blank"
          rel="noopener"
          sx={{ mx: 1 }}
        >
          <IconButton aria-label="facebook" sx={{ color: "#4267B2" }}>
            <FacebookIcon />
          </IconButton>
        </Link>
        <Link
          href="https://x.com/ASquad_Software?t=cwlTPKW5lmI85voJkP-UKA&s=09"
          target="_blank"
          rel="noopener"
          sx={{ mx: 1 }}
        >
          <IconButton aria-label="twitter" sx={{ color: "#1DA1F2" }}>
            <TwitterIcon />
          </IconButton>
        </Link>
        <Link
          href="https://x.com/ASquad_Software?t=cwlTPKW5lmI85voJkP-UKA&s=09"
          target="_blank"
          rel="noopener"
          sx={{ mx: 1 }}
        >
          <IconButton aria-label="linkedin" sx={{ color: "#0077B5" }}>
            <LinkedInIcon />
          </IconButton>
        </Link>
        <Link
          href="https://www.facebook.com/share/16Ua2cnsmG/"
          target="_blank"
          rel="noopener"
          sx={{ mx: 1 }}
        >
          <IconButton aria-label="instagram" sx={{ color: "#E1306C" }}>
            <InstagramIcon />
          </IconButton>
        </Link>
      </Box>

      {/* Newsletter Subscription */}
      <Typography variant="subtitle1" gutterBottom sx={{ color: "#ddd" }}>
        Subscribe to our newsletter
      </Typography>
      <Box
        component="form"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubscribe();
        }}
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 1,
          maxWidth: 400,
          mx: "auto",
        }}
      >
        <TextField
          type="email"
          size="small"
          label="Your email"
          variant="filled"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          sx={{
            flexGrow: 1,
            minWidth: 200,
            bgcolor: "#1e1e1e",
            borderRadius: 1,
            input: { color: "#eee" },
            "& .MuiInputLabel-root": { color: "#aaa" },
            "& .MuiFilledInput-root": {
              backgroundColor: "#1e1e1e",
              "&:hover": { backgroundColor: "#2a2a2a" },
              "&.Mui-focused": { backgroundColor: "#2a2a2a" },
            },
          }}
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          sx={{ px: 4 }}
        >
          Subscribe
        </Button>
      </Box>

      <Typography variant="body2" color="#777" sx={{ mt: 4 }}>
        &copy; {new Date().getFullYear()} Squad Hub. All rights reserved.
      </Typography>
    </Box>
  );
}
