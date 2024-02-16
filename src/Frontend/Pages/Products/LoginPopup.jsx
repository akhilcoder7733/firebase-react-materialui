import React from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Box } from "@mui/material";
import { styled } from "@mui/system";
import LoginImge from '../../../assets/login.svg'
import { useNavigate } from "react-router-dom";

const DialogBox = styled(Box)(({ theme }) => ({
  backgroundImage: "linear-gradient(45deg, rgba(219, 99, 251, 1) 0%, rgba(96, 130, 240, 1) 92%)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "row",
  padding: "20px",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    maxWidth: "350px",
    padding: 5
  }
}));

const DialogImage = styled("img")(({ theme }) => ({
  width: "300px",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    maxWidth: "200px"
  }
}));

const ResponsiveDialog = styled(Dialog)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    // Adjust maxWidth and width for smaller viewports
    maxWidth: "90%",
    width: "90%",
    marginLeft: "20px"
  },
  [theme.breakpoints.up("md")]: {
    // Default values for larger viewports
    maxWidth: "lg",
    width: "md",
  },
}));

const StyleButton = styled(Button)(({ theme }) => ({
  padding: '6px 15px',
  border: "unset",
  borderRadius: "15px",
  color: "#212121",
  zIndex: 1,
  background: "#e8e8e8",
  position: "relative",
  fontWeight: 1000,
  fontSize: "17px",
  boxShadow: "4px 8px 19px -3px rgba(0,0,0,0.27)",
  transition: "all 250ms",
  overflow: "hidden",

  "&:before": {
    content: "''",
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: 0,
    borderRadius: "15px",
    backgroundColor: "#212121",
    zIndex: -1,
    boxShadow: "4px 8px 19px -3px rgba(0,0,0,0.27)",
    transition: "all 250ms",
  },

  "&:hover": {
    color: "#e8e8e8",
  },

  "&:hover:before": {
    width: "100%",
  },
}));

const LoginPopup = ({ open, onClose }) => {

  const navigate = useNavigate();
  return (
    <ResponsiveDialog open={open} onClose={onClose}>
      <DialogBox>
        <Box>
          <DialogImage src={LoginImge} alt="imine" />
        </Box>
        <Box>
          <DialogTitle fontWeight={600} data-aos="fade-up" data-aos-delay="100"> Login Required</DialogTitle>
          <DialogContent data-aos="fade-up" data-aos-delay="200">
            <p>Login to your account to add items to the cart.</p>
          </DialogContent>
          <DialogActions >
            <StyleButton onClick={()=>navigate("/login")}>Login</StyleButton>
            <StyleButton onClick={onClose}>Close</StyleButton>
          </DialogActions>
        </Box>
      </DialogBox>
    </ResponsiveDialog>
  );
};

export default LoginPopup;
