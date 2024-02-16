import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { styled } from "@mui/system";

const MainBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "80vh",
  flexDirection: "column",
  // margin:theme.spacing(2),
  gap: theme.spacing(2),
  [theme.breakpoints.down("sm")]:{
    minHeight:"40vh"
  }
}));

const MutualBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
}));

const StyledHeading = styled(Typography)(({ theme }) => ({
  fontSize: "82px",
  fontWeight: 600,
  textAlign: "center",
  fontFamily:"Kanit, sans-serif",
  backgroundImage:"linear-gradient(45deg, rgba(38,115,236,1) 0%, rgba(137,50,213,1) 92%)",
  color:"transparent",
  backgroundClip:"text",
  WebkitBackgroundClip:"text",
}));

const CustomButton = styled(Button)(({ theme, darkMode }) => ({
    display: 'inline-block',
    padding: '0.3rem 0.8rem',
    fontSize: '16px',
    fontWeight: '700',
    color: darkMode ? 'white' : "#121212",
    border: '2px solid rgb(252, 70, 100)',
    cursor: 'pointer',
    position: 'relative',
    backgroundColor: 'transparent',
    textDecoration: 'none',
    overflow: 'hidden',
    zIndex: '1',
    fontFamily: 'inherit',
    '&::before': {
      content: '""',
      position: 'absolute',
      left: '0',
      top: '0',
      width: '100%',
      height: '100%',
      backgroundColor: 'rgb(252, 70, 100)',
      transform: 'translateX(-100%)',
      transition: 'all .3s',
      zIndex: '-1',
    },
    '&:hover::before': {
      transform: 'translateX(0)',
    },
  }));



function Welcome({darkMode}) {
  return (
    <MainBox>
      <StyledHeading variant="h1" data-aos="zoom-in" data-aos-delay="100">Welcome!</StyledHeading>
      <Typography
        variant="h4"
        style={{ textAlign: "center", fontWeight: "bold",fontFamily:"Kanit, sans-serif" }}
        
      >
        To Our Website
      </Typography>

      <MutualBox>
        <Typography variant="body2" style={{ textAlign: "center",fontFamily:"Kanit, sans-serif" }}>
          {" "}
          Include a link to your website's privacy policy, especially if you're
          collecting personal information{" "}
        </Typography>
        <Typography variant="body2" style={{ textAlign: "center",fontFamily:"Kanit, sans-serif" }}>
          Encourage visitors to reach out by including a clear call to action,
          such as "Contact Us Today"{" "}
        </Typography>
        <Typography variant="body2" style={{ textAlign: "center",fontFamily:"Kanit, sans-serif" }}>
          {" "}
          Make sure the CTA stands out and prompts action.{" "}
        </Typography>
      </MutualBox>
      <CustomButton data-aos="fade-up" data-aos-delay="100" darkMode={darkMode}>Get Started</CustomButton>
    </MainBox>
  );
}

export default Welcome;
