// src/components/Registration.js
import React, { useState } from "react";
import {
  TextField,
  Button,
  Backdrop,
  Snackbar,
  Alert,
  Box,
  Typography,
} from "@mui/material";
import { auth, registerUser } from "../../../firebase"; // Import registerUser
import { useNavigate } from "react-router-dom";
import { SyncLoader } from "react-spinners";
import { styled } from "@mui/system";
import RegisterImg from "../../../assets/registerimga.svg";

const MainBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  // marginTop: theme.spacing(1),
  minHeight: "90vh",
}));

const AutoBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  boxShadow: "0px 0px 56px 30px rgba(69, 69, 69, 0.6)",
  borderRadius: "10px",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

const LoginBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  // backgroundColor:"red",
  // padding:theme.spacing(3),
  gap: theme.spacing(5),
  width: "390px",
  height: "500px",
  borderTopLeftRadius: "10px",
  borderBottomLeftRadius: "10px",
}));

const LoginFormBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  gap: theme.spacing(2),
}));

const RightBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  boxShadow: "inset 0px 0px 80px 31px rgba(0,0,0,0.3)",
  backgroundColor: "#41f06f",
  // padding:theme.spacing(3),
  gap: theme.spacing(5),
  width: "390px",
  height: "500px",
  borderTopRightRadius: "10px",
  borderBottomRightRadius: "10px",
}));

const StyledTyp = styled(Typography)(({ theme, darkMode }) => ({
  textAlign: "center",
  color: darkMode ? "#dedcdc" : "#111",
  fontSize: "14px",
  fontFamily: "Kanit, sans-serif",
}));

const StyledTypo = styled(Typography)(({ theme, darkMode }) => ({
  textAlign:"center",
  color:"#5e5e5e",
  fontSize:"14px",
  cursor:"pointer",
  "&:hover":{
    color: darkMode ? "#fff" : "#1649f2"
  }
}));

const StyledButton = styled(Button)(({ theme }) => ({
  padding: "0.5em 1.8em",
  border: "2px solid #17C3B2",
  position: "relative",
  overflow: "hidden",
  backgroundColor: "transparent",
  textAlign: "center",
  textTransform: "uppercase",
  fontSize: "14px",
  transition: "0.3s",
  zIndex: 1,
  fontFamily: "inherit",
  color: "#17C3B2",

  "&:before": {
    content: '""',
    width: 0,
    height: "300%",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%) rotate(45deg)",
    background: "#17C3B2",
    transition: "0.5s ease",
    display: "block",
    zIndex: -1,
  },

  "&:hover": {
    color: "#111",

    "&:before": {
      width: "105%",
    },
  },
}));

const Registration = ({ darkMode }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);
  const [registerSuccess, setRegisterSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleRegistration = async () => {
    try {
      setOpen(true);
      await registerUser(auth, email, password); // Use the registerUser function
      console.log("Registration successful!");

      setRegisterSuccess(true);
      setErrorMessage("");

      setTimeout(() => {
        setOpen(false);
        navigate("/");
      }, 500);
    } catch (error) {
      console.error("Registration failed:", error.message);

      setRegisterSuccess(false);
      setErrorMessage(
        "Registeration failed. Please check your Internet connection."
      );

      setTimeout(() => {
        setOpen(false);
      }, 2000);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <MainBox>
      <AutoBox>
        <LoginBox>
          <Typography
            variant="h3"
            fontWeight={600}
            style={{ fontFamily: "Kanit, sans-serif" }}
          >
            Register
          </Typography>

          <LoginFormBox>
            <TextField
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <StyledButton variant="contained" onClick={handleRegistration}>
              Register
            </StyledButton>
            <StyledTypo variant='subtitle2' darkMode={darkMode} onClick={()=>navigate("/login")}>
Already Have an account.?<b>Log In</b>
      </StyledTypo>
          </LoginFormBox>
        </LoginBox>
        <RightBox>
          <Typography
            variant="h4"
            fontWeight={600}
            style={{ fontFamily: "Kanit, sans-serif", fontWeight: "600" }}
          >
            Why Connect us.
          </Typography>
          <img src={RegisterImg} alt="imt" style={{ width: "200px" }} />
          <Box>
            <StyledTyp darkMode={darkMode} variant="subtitle1">
              All services are made by Akhil.
            </StyledTyp>
            <StyledTyp darkMode={darkMode} variant="subtitle1">
              Everything is made for demo and its made by Akhil.
            </StyledTyp>
          </Box>
        </RightBox>
      </AutoBox>

      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <SyncLoader color="#36d7b7" />
      </Backdrop>
      <Snackbar open={open} autoHideDuration={3000}>
        <Alert
          severity={registerSuccess ? "success" : "error"}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {registerSuccess ? "User Registered successfully!" : errorMessage}
        </Alert>
      </Snackbar>
    </MainBox>
  );
};

export default Registration;
