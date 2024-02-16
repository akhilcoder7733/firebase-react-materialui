import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/system";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { useNavigate } from "react-router-dom";

const MainBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  marginTop: theme.spacing(5),
  textAlign:"center",
}));

const SuccessIcon = styled(CheckCircleOutlineIcon)(({ theme }) => ({
  color: "#4CAF50",
  fontSize: "64px",
  marginBottom: theme.spacing(2),
}));

const StyleButton = styled(Button)(({ theme }) => ({
  padding: '6px 15px',
  border: "unset",
  borderRadius: "15px",
  color: "#212121",
  zIndex: 1,
  background: "#e8e833",
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

const ConfirmationPage = ({ name, address, phoneNumber }) => {

  const navigate = useNavigate();
  return (
    <MainBox>
      <SuccessIcon />
      <Typography variant="h4" mb={2}>
        Congratulations! Your Order is Placed
      </Typography>
      <Typography variant="body1" textAlign="center">
        Thank you, <b>{name}</b>, for placing your order. Your items will be delivered
        to:
      </Typography>
      <Typography variant="body1" fontWeight="bold" textAlign="center">
        {address}
      </Typography>
      <Typography variant="body1" textAlign="center">
        We will contact you at <b>{phoneNumber} </b>for any further details.
      </Typography>
      <StyleButton style={{marginTop:"20px"}} onClick={()=>navigate("/")}>Continue shopping</StyleButton>
    </MainBox>
  );
};

export default ConfirmationPage;
