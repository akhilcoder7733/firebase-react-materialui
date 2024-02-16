import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import { styled } from "@mui/system";

const StyledButton = styled(Button)(({ theme, darkMode }) => ({
  appearance: "none",
  backgroundColor: "transparent",
  border: darkMode ? "2px solid #fff" : "2px solid #3B3B3B",
  borderRadius: "15px",
  boxSizing: "border-box",
  color: darkMode ? "#fff" : "#3B3B3B",
  cursor: "pointer",
  display: "inline-block",
  fontFamily:
    'Roobert, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  fontSize: "16px",
  fontWeight: 600,
  lineHeight: "normal",
  margin: 0,
  minHeight: "40px",
  minWidth: 0,
  outline: "none",
  padding: "6px 15px",
  textAlign: "center",
  textDecoration: "none",
  transition: "all 300ms cubic-bezier(.23, 1, 0.32, 1)",
  userSelect: "none",
  WebkitUserSelect: "none",
  touchAction: "manipulation",
  width: "100%",
  willChange: "transform",

  "&:disabled": {
    pointerEvents: "none",
  },

  "&:hover": {
    color: "#fff",
    backgroundColor: "#1A1A1A",
    boxShadow: `rgba(0, 0, 0, 0.25) 0 8px 15px`,
    transform: "translateY(-2px)",
  },

  "&:active": {
    boxShadow: "none",
    transform: "translateY(0)",
  },
}));

const NotFoundPage = ({ darkMode, setDarkMode }) => {
  const handleDarkModeToggle = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };
  return (
    <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "80vh",
      textAlign: "center",
    }}
  >
    <Fade cascade damping={0.2}>
      <Typography
        variant="h1"
        color="primary"
        sx={{ fontSize: "6rem", fontWeight: "bold" }}
      >
        404
      </Typography>
      <Typography
        variant="h5"
        color="textSecondary"
        sx={{ marginBottom: "2rem" }}
      >
        Oops! Page not found.
      </Typography>
      <Typography variant="body1" color="textSecondary">
        The page you are looking for might be in another castle.
      </Typography>
      <StyledButton
        darkMode={darkMode}
        component={Link}
        to="/"
        sx={{ marginTop: "2rem", textDecoration: "none" }}
        onClick={handleDarkModeToggle}
      >
        Go Home
      </StyledButton>
    </Fade>
  </Box>
  );
};

export default NotFoundPage;
